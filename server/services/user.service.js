const User = require('../../models/User.Model')

async function updateUser(id, userBody) {
    try{
        const updatedUser = await User.findByIdAndUpdate(id, {$set: userBody}, {new: true})
    } catch(err) {
        throw new Error(err)
    }
}

module.exports = {
    updateUser
}