const User = require('../../models/User.Model')


async function userRegister(userBody) {
    try{
        const newUser = await new User(userBody);
        await newUser.save();
    } catch(err) {
        throw new Error(err)
    }
}

module.exports = {
    userRegister
}