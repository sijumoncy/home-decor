const bcrypt = require('bcryptjs')

async function matchPassword(candidatePassword, hashedPassword) {
    return bcrypt.compareSync(candidatePassword, hashedPassword)
}

module.exports = {
    matchPassword
}