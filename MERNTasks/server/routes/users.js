const { Router } = require("express");
const router = Router();
const userController = require("../controllers/userController");
const { check } = require("express-validator");

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").not().isEmpty(),
    check("email", "Add a valid email").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    check("password", "Password must have at least 6 characters").isLength({
      min: 6,
    }),
  ],
  userController.createUser
);

module.exports = router;
