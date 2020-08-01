const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ ok: false, msg: "User already exists" });
    }

    user = new User({ name, email });

    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    const token = await generateJWT(user._id, user.name);

    res.status(201).json({
      ok: true,
      token,
      uid: user._id,
      name: user.name,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "Something went wrong" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ ok: false, msg: "Invalid user" });
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ ok: false, msg: "Invalid user" });
    }

    const token = await generateJWT(user._id, user.name);

    res.json({ ok: true, token, uid: user._id, name: user.name });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "Something went wrong" });
  }
};

const revalidateToken = async (req, res) => {
  const { uid, name } = req;

  const token = await generateJWT(uid, name);

  res.json({ ok: true, token, uid, name });
};

module.exports = {
  createUser,
  loginUser,
  revalidateToken,
};
