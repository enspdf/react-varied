const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const authController = require("../controllers/authController");
const auth = require("../middlewares/auth");

router.post(
  "/",
  [
    check("email", "Email is required").not().isEmpty(),
    check("email", "Add a valid email").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    check("password", "Password must have at least 6 characters").isLength({
      min: 6,
    }),
  ],
  authController.authenticateUser
);

router.get("/", auth, authController.authenticatedUser);

module.exports = router;
