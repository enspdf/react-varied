const { User } = require("../models");
const bcrypt = require("bcryptjs");
const { UserInputError, AuthenticationError } = require("apollo-server");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env.json");
const { Op } = require("sequelize");

module.exports = {
  Query: {
    getUsers: async (_, __, context) => {
      try {
        if (context.req && context.req.headers.authorization) {
          const token = context.req.headers.authorization.split("Bearer ")[1];
          jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
            if (err) {
              throw new AuthenticationError("Unauthenticated");
            }

            user = decodedToken;
          });
        }

        const users = await User.findAll({
          where: { username: { [Op.ne]: user.username } },
        });

        return users;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    login: async (_, args) => {
      const { username, password } = args;
      let errors = {};

      try {
        if (username.trim() === "")
          errors.username = "Username must not be empty";
        if (username === "") errors.password = "Password must not be empty";

        if (Object.keys(errors).length > 0) {
          throw new UserInputError("Bad input", { errors });
        }

        const user = await User.findOne({ where: { username } });

        if (!user) {
          errors.username = "User not found";
          throw new UserInputError("User not found", { errors });
        }

        const correctPassword = await bcrypt.compare(password, user.password);

        if (!correctPassword) {
          errors.password = "Password is incorrect";
          throw new AuthenticationError("Password is incorrect", { errors });
        }

        const token = jwt.sign({ username }, JWT_SECRET, {
          expiresIn: 60 * 60,
        });

        return {
          ...user.toJSON(),
          createdAt: user.createdAt.toISOString(),
          token,
        };
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },
  Mutation: {
    register: async (_, args) => {
      let { username, email, password, confirmPassword } = args;
      let errors = {};

      try {
        if (email.trim() === "") errors.email = "Email must not be empty";
        if (username.trim() === "")
          errors.username = "Username must not be empty";
        if (password.trim() === "")
          errors.password = "Password must not be empty";
        if (confirmPassword.trim() === "")
          errors.confirmPassword = "Confirmation Password must not be empty";

        if (password !== confirmPassword)
          errors.confirmPassword = "Passwords must match";

        const userByUsername = await User.findOne({ where: { username } });
        const userByEmail = await User.findOne({ where: { email } });

        if (userByUsername) errors.username = "Username is taken";
        if (userByEmail) errors.email = "Email is taken";

        if (Object.keys(errors).length > 0) {
          throw errors;
        }

        password = await bcrypt.hash(password, 6);
        const user = await User.create({ username, email, password });

        return user;
      } catch (err) {
        throw new UserInputError("Bad input", { errors: err });
      }
    },
  },
};
