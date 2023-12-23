const CryptoJs = require('crypto-js')
const config = require('../../config/config')
const {userRegister} = require('../services/auth.service')

async function userRegister(req, res) {
  try {
    const userBody = {
      username: req.body.username,
      email: req.body.email,
      password: CryptoJs.AES.encrypt(
        req.user.password,
        config.crypto.secret
      ).toString(),
    }
    const savedUser = await userRegister(userBody)
    res
      .status(201)
      .json({ message: "Registration successfull", data: savedUser });
  } catch (err) {
    console.error("Register user error : ", err);
    res.status(500).json({ message: "error", error: err });
  }
}



module.exports = {
  userRegister
}