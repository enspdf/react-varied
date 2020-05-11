const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "Token is required, unauthorized" });
  }

  try {
    const cipher = jwt.verify(token, process.env.SECRET);
    req.user = cipher.user;

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ msg: "Invalid token" });
  }
};
