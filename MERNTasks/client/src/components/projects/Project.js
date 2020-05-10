import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Project = ({ project }) => {
  const projectsContext = useContext(projectContext);
  const { currentProject } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { getTasks } = tasksContext;

  const chooseProject = (id) => {
    currentProject(id);
    getTasks(id);
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => chooseProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
