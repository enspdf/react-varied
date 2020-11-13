const { userModel } = require("../../databases/mongo");
const { bcryptHelpers } = require("../../helpers");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config");

module.exports = {
  signUp: async (req, res) => {
    const { username, password } = req.body;

    const userFound = await userModel.findOne({ username });

    if (userFound)
      return res.status(403).json({ msg: "User already registered" });

    const encryptPassword = bcryptHelpers.encryptPassword(password);

    const newUser = new userModel({ username, password: encryptPassword });
    await newUser.save();

    return res.json({ msg: `${username} saved` });
  },
  signIn: async (req, res) => {
    const { username, password } = req.body;

    const userFound = await userModel.findOne({ username });

    if (!userFound) return res.status(403).json({ msg: "User doesn't exists" });

    const { password: encryptedPassword } = userFound;
    const comparePassword = bcryptHelpers.comparePassword(
      password,
      encryptedPassword
    );

    const userToGenerateToken = {
      _id: userFound._id,
      username: userFound.username,
    };

    if (!comparePassword)
      return res.status(403).json({ msg: "Invalid credentials" });

    const token = jwt.sign(JSON.stringify(userToGenerateToken), jwtSecret);

    res.send({ info: token });
  },
};
