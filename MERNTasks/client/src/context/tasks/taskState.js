import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  TASK_STATUS,
  CURRENT_TASK,
  EDIT_TASK,
  CLEAN_TASK,
} from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { id: 1, name: "Task 1", status: true, projectId: 1 },
      { id: 2, name: "Task 2", status: false, projectId: 2 },
      { id: 3, name: "Task 3", status: false, projectId: 3 },
      { id: 4, name: "Task 4", status: true, projectId: 4 },
      { id: 5, name: "Task 1", status: true, projectId: 1 },
      { id: 6, name: "Task 2", status: false, projectId: 2 },
      { id: 7, name: "Task 3", status: false, projectId: 3 },
      { id: 8, name: "Task 4", status: true, projectId: 4 },
      { id: 9, name: "Task 1", status: true, projectId: 1 },
      { id: 10, name: "Task 2", status: false, projectId: 2 },
      { id: 11, name: "Task 3", status: false, projectId: 3 },
      { id: 12, name: "Task 4", status: true, projectId: 4 },
    ],
    tasksProject: null,
    taskError: false,
    taskSelected: null,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const getTasks = (projectId) => {
    dispatch({
      type: TASKS_PROJECT,
      payload: projectId,
    });
  };

  const addTask = (task) => {
    task.id = uuidv4();
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK,
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  };

  const changeTaskStatus = (task) => {
    dispatch({
      type: TASK_STATUS,
      payload: task,
    });
  };

  const currentTask = (task) => {
    dispatch({
      type: CURRENT_TASK,
      payload: task,
    });
  };

  const editTask = (task) => {
    dispatch({
      type: EDIT_TASK,
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
        tasks: state.tasks,
        tasksProject: state.tasksProject,
        taskError: state.taskError,
        taskSelected: state.taskSelected,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
        changeTaskStatus,
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
