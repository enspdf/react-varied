import React, { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  CURRENT_PROJECT,
  DELETE_PROJECT,
  PROJECT_ERROR,
} from "../../types";
import axiosClient from "../../config/axios";

const ProjectState = (props) => {
  const initialState = {
    projects: [],
    form: false,
    formError: false,
    project: null,
    message: null,
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showForm = () => {
    dispatch({ type: FORM_PROJECT });
  };

  const getProjects = async () => {
    try {
      const result = await axiosClient.get("/api/projects");

      dispatch({
        type: GET_PROJECTS,
        payload: result.data,
      });
    } catch (error) {
      const alert = {
        msg: "An error has occurred",
        category: "alerta-error",
      };

      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
  };

  const addProject = async (project) => {
    try {
      const result = await axiosClient.post("/api/projects", project);

      dispatch({
        type: ADD_PROJECT,
        payload: result.data.project,
      });
    } catch (error) {
      const alert = {
        msg: "An error has occurred",
        category: "alerta-error",
      };

      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
  };

  const showError = () => {
    dispatch({
      type: VALIDATE_FORM,
    });
  };

  const currentProject = (projectId) => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId,
    });
  };

  const deleteProject = async (projectId) => {
    try {
      await axiosClient.delete(`/api/projects/${projectId}`);

      dispatch({
        type: DELETE_PROJECT,
        payload: projectId,
      });
    } catch (error) {
      const alert = {
        msg: "An error has occurred",
        category: "alerta-error",
      };

      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
  };

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        formError: state.formError,
        project: state.project,
        message: state.message,
        showForm,
        getProjects,
        addProject,
        showError,
        currentProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
