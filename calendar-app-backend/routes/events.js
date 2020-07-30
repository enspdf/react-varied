const { Router } = require("express");
const router = Router();
const { validateJwt } = require("../middlewares/validateJwt");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");
const { check } = require("express-validator");
const validateFields = require("../middlewares/validateFields");
const { isDate } = require("../helpers/isDate");

router.use(validateJwt);

router.get("/", getEvents);

router.post(
  "/",
  [
    check("title", "Title is required").not().isEmpty(),
    check("start", "Start date is required").custom(isDate),
    check("end", "End date is required").custom(isDate),
    validateFields,
  ],
  createEvent
);

router.put("/:id", updateEvent);

router.delete("/:id", deleteEvent);

module.exports = router;
