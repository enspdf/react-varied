const Task = require("../models/Task");
const Project = require("../models/Project");
const { validationResult } = require("express-validator");

exports.createTask = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { projectId } = req.body;

  try {
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ msg: "Project not found" });
    }

    if (project.creator.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const task = new Task(req.body);
    await task.save();

    res.status(201).json({ task });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "An error has occurred" });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const { projectId } = req.query;
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ msg: "Project not found" });
    }

    if (project.creator.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const tasks = await Task.find({ projectId }).sort({ created: -1 });

    res.status(200).json({ tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "An error has occurred" });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { projectId, name, status } = req.body;
    let task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ msg: "Project not found" });
    }

    if (project.creator.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const newTask = {};

    newTask.name = name;
    newTask.status = status;

    task = await Task.findOneAndUpdate({ _id: req.params.id }, newTask, {
      new: true,
    });

    res.status(200).json({ task });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "An error has occurred" });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { projectId } = req.query;
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ msg: "Project not found" });
    }

    if (project.creator.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    await Task.findOneAndRemove({ _id: req.params.id });
    res.status(200).json({ msg: "Task deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "An error has occurred" });
  }
};
