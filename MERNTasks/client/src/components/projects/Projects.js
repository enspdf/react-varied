import React, { useContext, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import TaskForm from "../tasks/TaskForm";
import TaskList from "../tasks/TaskList";
import AuthContext from "../../context/authentication/authContext";

const Projects = () => {
  const authContext = useContext(AuthContext);
  const { userAuthenticated } = authContext;

  useEffect(() => {
    userAuthenticated();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Navbar />
        <main>
          <TaskForm />
          <div className="contenedor-tareas">
            <TaskList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
