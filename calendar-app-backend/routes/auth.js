const { Router } = require("express");
const {
  createUser,
  revalidateToken,
  loginUser,
} = require("../controllers/auth");
const router = Router();
const { check } = require("express-validator");
const validateFields = require("../middlewares/validateFields");
const { validateJwt } = require("../middlewares/validateJwt");

router.post(
  "/new",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check(
      "password",
      "Password must must have at least 6 characters"
    ).isLength({ min: 6 }),
    validateFields,
  ],
  createUser
);

router.post(
  "/",
  [
    check("email", "Email is required").isEmail(),
    check(
      "password",
      "Password must must have at least 6 characters"
    ).isLength({ min: 6 }),
    validateFields,
  ],
  loginUser
);

router.post("/renew", validateJwt, revalidateToken);

module.exports = router;
