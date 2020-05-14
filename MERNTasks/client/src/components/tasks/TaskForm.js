import React, { useContext, useState, useEffect } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const TaskForm = () => {
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  const tasksContext = useContext(taskContext);
  const {
    taskError,
    addTask,
    validateTask,
    getTasks,
    taskSelected,
    editTask,
    cleanTask,
  } = tasksContext;

  useEffect(() => {
    if (taskSelected !== null) {
      setTask(taskSelected);
    } else {
      setTask({
        name: "",
      });
    }
  }, [taskSelected]);

  const [task, setTask] = useState({
    name: "",
  });
  const { name } = task;

  if (!project) return null;

  const [currentProject] = project;

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      validateTask();
      return;
    }

    if (taskSelected === null) {
      task.projectId = currentProject._id;
      addTask(task);
    } else {
      editTask(task);
      cleanTask();
    }

    getTasks(currentProject.id);
    setTask({ name: "" });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={taskSelected ? "Edit Task" : "Add Task"}
          />
        </div>
      </form>
      {taskError ? (
        <p className="mensaje error">Task Name is required</p>
      ) : null}
    </div>
  );
};

export default TaskForm;
