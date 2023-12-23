const jwt = require("jsonwebtoken");
const config = require("../config/config");

async function generateToken(data) {
  const payload = { id: data._id };
  const accessToken = jwt.sign(payload, config.jwt.secret, {expiresIn:`${config.jwt.accessExpirationMinutes}m`});
  return accessToken
}


module.exports = {
  generateToken
}