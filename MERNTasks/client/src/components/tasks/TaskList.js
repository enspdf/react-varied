import React, { Fragment, useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";
import Task from "./Task";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const TaskList = () => {
  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { tasksProject } = tasksContext;

  if (!project) return <h2>Choose a project</h2>;

  const [currentProject] = project;

  const onClickDelete = () => {
    deleteProject(currentProject._id);
  };

  return (
    <Fragment>
      <h2>Project: {currentProject.name}</h2>
      <ul className="listado-tareas">
        {tasksProject.length === 0 ? (
          <li className="tarea">
            <p>No tasks</p>
          </li>
        ) : (
          <TransitionGroup>
            {tasksProject.map((task) => (
              <CSSTransition key={task.id} timeout={200} classNames="tarea">
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickDelete}
      >
        Delete Project &times;
      </button>
    </Fragment>
  );
};

export default TaskList;
