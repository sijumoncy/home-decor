const User = require("../models/User.Model");

async function userRegister(userBody) {
  try {
    const user = await User.findOne({ email: userBody.email });
    if (!user) {
      const newUser = await new User(userBody);
      await newUser.save();
      return newUser 
    }
    return null
  } catch (err) {
    throw new Error(err);
  }
}

async function userLogin(username) {
  try {
    const user = await User.findOne({ username });
    return user;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  userRegister,
  userLogin,
};
