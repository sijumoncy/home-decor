const httpStatus = require('http-status')
const userService = require('../services/user.service')

async function updateUser(req, res) {
  try {
    const userBody = {
      name : req.body.name,
      email : req.body.email,
      password: req.body.password,
    }
    const updatedUser =  await userService.updateUser(req.params.id , userBody)
    const {password, ...resUser} = updatedUser._doc
    res.status(httpStatus.CREATED).json({ message: "Successfully updated user details", user: resUser});
  } catch (err) {
    console.error("update user error : ", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "error", error: err });
  }
}

async function deleteUser(req, res) {
  try{
    const deletedUser = await userService.deleteUser(req.params.id)
    const {password, ...resUser} = deletedUser._doc
    res.status(httpStatus.CREATED).json({ message: "Successfully deleted user", user: resUser});
  } catch(err) {
    console.error("delete user error : ", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "error", error: err });
  }
}

async function getUser(req,res) {
  try{
    const user =  await userService.getUser(req.params.id)
    !user && res.status(httpStatus.NOT_FOUND).json({ message: "user not found", statuCode: 404});
    const {password, ...resUser} = user._doc
    res.status(httpStatus.OK).json({ user: resUser});
  }catch(err){
    console.error("get user error : ", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "error", error: err });
  }
}

async function getUsers(req,res) {
  try{
    const pageNum = (req.query.limit || 100) * (req.query.page || 0);
    const users =  await userService.getUsers(pageNum, req.query.limit)
    res.status(httpStatus.OK).json(users);
  }catch(err) {
    console.error("get users error : ", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "error", error: err });
  }
}

async function getUserStatus() {
  try{
    const status =  await userService.getUserStatus()
    res.status(httpStatus.OK).json(status);
  }catch(err) {
    console.error("get user status error : ", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "error", error: err });
  }
}

module.exports = {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  getUserStatus
}