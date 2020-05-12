const { Router } = require("express");
const router = Router();
const taskController = require("../controllers/taskController");
const auth = require("../middlewares/auth");
const { check } = require("express-validator");

router.post(
  "/",
  auth,
  [
    check("name", "Name is required").not().isEmpty(),
    check("projectId", "ProjectId is required").not().isEmpty(),
  ],
  taskController.createTask
);

router.get("/", auth, taskController.getTasks);

router.put("/:id", auth, taskController.updateTask);

router.delete("/:id", auth, taskController.deleteTask);

module.exports = router;
