const jwt = require("jsonwebtoken");

function generateToken(user) {
  return jwt.sign({ id: user._id, username: user.username }, "secret_key", {
    expiresIn: "1h",
  });
}

module.exports = generateToken;
