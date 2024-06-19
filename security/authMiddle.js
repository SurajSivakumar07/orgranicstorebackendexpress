const jwt = require("jsonwebtoken");
const User = require("../model/securityMdeol/securityModel");

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access denied" });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });

    try {
      const foundUser = await User.findById(user.id);
      if (!foundUser)
        return res.status(404).json({ message: "User not found" });
      req.user = foundUser;
      next();
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });
};
