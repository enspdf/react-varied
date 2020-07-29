const jwt = require("jsonwebtoken");

const validateJwt = (req, res, next) => {
  const token = req.header["x-token"];

  if (!token) {
    return res.status(401).json({ ok: false, msg: "Token must be sent" });
  }

  try {
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);
    req.uid = uid;
    req.name = name;
  } catch (error) {
    console.log(error);
    return res.status(401).json({ ok: false, msg: "Invalid token" });
  }

  next();
};

module.exports = {
  validateJwt,
};
