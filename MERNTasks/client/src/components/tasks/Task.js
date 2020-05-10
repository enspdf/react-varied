import React, { useContext } from "react";
import taskContext from "../../context/tasks/taskContext";
import projectContext from "../../context/projects/projectContext";

const Task = ({ task }) => {
  const tasksContext = useContext(taskContext);
  const { deleteTask, getTasks, changeTaskStatus, currentTask } = tasksContext;

  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  const [currentProject] = project;

  const taskDelete = (id) => {
    deleteTask(id);
    getTasks(currentProject.id);
  };

  const changeStatus = (task) => {
    if (task.status) {
      task.status = false;
    } else {
      task.status = true;
    }

    changeTaskStatus(task);
  };

  const chooseTask = (task) => {
    currentTask(task);
  };

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.status ? (
          <button
            type="button"
            className="completo"
            onClick={() => changeStatus(task)}
          >
            Completed
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => changeStatus(task)}
          >
            Not Completed
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => chooseTask(task)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => taskDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
