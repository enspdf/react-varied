const Project = require("../models/Project");
const { validationResult } = require("express-validator");

exports.createProject = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const project = new Project(req.body);
    project.creator = req.user.id;
    await project.save();

    res.status(201).json({ project });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "An error has occurred" });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ creator: req.user.id }).sort({
      created: -1,
    });
    return res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "An error has occurred" });
  }
};

exports.updateProject = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name } = req.body;
  const newProject = {};

  if (name) {
    newProject.name = name;
  }

  try {
    let project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: "Project not found" });
    }

    if (project.creator.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    project = await Project.findOneAndUpdate(
      { _id: req.params.id },
      { $set: newProject },
      { new: true }
    );

    res.status(200).json({ project });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "An error has occurred" });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    let project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: "Project not found" });
    }

    if (project.creator.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    await Project.findOneAndRemove({ _id: req.params.id });

    res.status(200).json({ msg: "Project deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "An error has occurred" });
  }
};
