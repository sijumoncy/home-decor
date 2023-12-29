const jwt = require('jsonwebtoken')
const httpStatus = require('http-status')
const config = require('../config/config')
const User = require('../models/User.Model')

const checkTokenInRequest = async (req, res, next) => {
  try {
    const authHeader = (req && req.headers.authorization) || (req && req.headers.Authorization);
    const accessToken = (authHeader && authHeader.split(' ')[1]) || req?.cookies?.authToken || req?.cookies?.accessToken || '';

    if (!accessToken) {
        res.send(httpStatus.UNAUTHORIZED).json({message: "authentication failed", statusCode:401})
    }

    jwt.verify(accessToken, config.jwt.secret , async (error, decodedUser) => {
        
      if(error) {
        const errorMsg = error.name === 'JsonWebTokenError' ? 'Unauthorized. Invalid Token' : error.message;
        res.send(httpStatus.FORBIDDEN).json({message: "errorMsg", statusCode: 403})
      }
      const user = await User.findById(decodedUser.id).select('-password')
      if(!user) {
        res.send(httpStatus.FORBIDDEN).json({message: "Unauthorized. Invalid Token", statusCode: 403})
      }
      req.user = user
      next()
    });
      
  } catch(err) {
    res.send(httpStatus.UNAUTHORIZED).json({message: "authentication failed", statusCode:401})
  }
}

async function authenticate(req, res, next) {
  try{
    await checkTokenInRequest(req, res, next)
  }catch(err) {
    res.send(httpStatus.UNAUTHORIZED).json({message: "authentication failed", statusCode:401})
  }
}

// check created user || admin accessing (check with params.id)
async function userDataUpdateByCreatedUser(req, res, next) {
  try{
    if((req.user._id === req.params.id) || req.user.isAdmin) {
      next()
    }
    res.status(httpStatus.FORBIDDEN).json({ message: "Permission Denied"});
  } catch(Err) {
    res.send(httpStatus.FORBIDDEN).json({message: "Authorisation failed", statusCode:403})
  }
}

async function adminOnlyCheck(req, res, next) {
  if(req.user && req.user.isAdmin) {
    next()
  }
  res.status(httpStatus.FORBIDDEN).json({ message: "Permission Denied", statusCode:403});
}


module.exports = {
    authenticate,
    userDataUpdateByCreatedUser,
    adminOnlyCheck
}