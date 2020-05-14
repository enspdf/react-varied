import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  CURRENT_TASK,
  EDIT_TASK,
  CLEAN_TASK,
} from "../../types";
import axiosClient from "../../config/axios";

const TaskState = (props) => {
  const initialState = {
    tasksProject: [],
    taskError: false,
    taskSelected: null,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const getTasks = async (projectId) => {
    try {
      const result = await axiosClient.get("/api/tasks", {
        params: { projectId },
      });

      dispatch({
        type: TASKS_PROJECT,
        payload: result.data.tasks,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = async (task) => {
    try {
      await axiosClient.post("/api/tasks", task);

      dispatch({
        type: ADD_TASK,
        payload: task,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK,
    });
  };

  const deleteTask = async (id, projectId) => {
    try {
      await axiosClient.delete(`/api/tasks/${id}`, { params: { projectId } });

      dispatch({
        type: DELETE_TASK,
        payload: id,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const editTask = async (task) => {
    try {
      const result = await axiosClient.put(`/api/tasks/${task._id}`, task);

      dispatch({
        type: EDIT_TASK,
        payload: result.data.task,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const currentTask = (task) => {
    dispatch({
      type: CURRENT_TASK,
      payload: task,
    });
  };

  const cleanTask = () => {
    dispatch({
      type: CLEAN_TASK,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasksProject: state.tasksProject,
        taskError: state.taskError,
        taskSelected: state.taskSelected,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
        currentTask,
        editTask,
        cleanTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
