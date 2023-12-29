const CryptoJs = require("crypto-js");
const config = require("../config/config");
const authService = require("../services/auth.service");
const tokenService = require("../services/token.service");

async function userRegister(req, res) {
  try {
    const userBody = {
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      password: CryptoJs.AES.encrypt(
        req.body.password,
        config.crypto.secret
      ).toString(),
    };
    const createdData = await authService.userRegister(userBody);
      // rerurn actual success data
    if (createdData) {
      const { password, ...resUser } = createdData._doc;
      res
        .status(201)
        .json({
          message: "Registration successfull",
          data: resUser,
          success: true,
        });

      return ;
    }
    res.status(200).json({success:false, message:"Email is taken", data:null});
  
  } catch (err) {
    console.error("Register user error : ", err);
    res.status(500).json({ message: "error", error: err });
  }
}

async function userLogin(req, res) {
  try {
    const user = await authService.userLogin(req.body.username);
    if (user) {
      hashedPassword = CryptoJs.AES.encrypt(
        req.user.password,
        config.crypto.secret
      ).toString();
      const { password, ...resUser } = user._doc;
      const accessToken = await tokenService.generateToken(resUser);
      hashedPassword === password &&
        res
          .status(200)
          .json({ message: "Login Successfull", user: resUser, accessToken });
    }
    res.status(401).json({ message: "Invalid Credentials" });
  } catch (err) {
    console.error("Register user error : ", err);
    res.status(500).json({ message: "error", error: err });
  }
}

module.exports = {
  userRegister,
  userLogin,
};
