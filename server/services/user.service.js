const User = require('../../models/User.Model')

async function updateUser(id, userBody) {
    try{
        const updatedUser = await User.findByIdAndUpdate(id, {$set: userBody}, {new: true})
        return updatedUser
    } catch(err) {
        throw new Error(err)
    }
}

async function deleteUser(id) {
    try{
        const deletedUser = await User.findByIdAndDelete(id)
        return deletedUser
    } catch(err) {
        throw new Error(err)
    }
}

module.exports = {
    updateUser,
    deleteUser
}