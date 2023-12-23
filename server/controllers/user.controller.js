const httpStatus = require('http-status')
const CryptoJs = require('crypto-js')
const userServide = require('../services/user.service')

async function updateUser(req, res) {
  try {
    const userBody = {
      name : req.body.name,
      email : req.body.email,
      password: CryptoJs.AES.encrypt(
        req.body.password,
        config.crypto.secret
      ).toString()
    }
    const updatedUser =  await userServide.updateUser(req.params.id , userBody)
    const {password, ...resUser} = updatedUser._doc
    res.status(httpStatus.CREATED).json({ message: "Successfully updated user details", user: resUser});
  } catch (err) {
    console.error("update user error : ", err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "error", error: err });
  }
}

module.exports = {
  updateUser
}