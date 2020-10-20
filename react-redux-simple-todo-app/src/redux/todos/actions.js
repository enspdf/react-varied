import { ADD_TODO, REMOVE_TODO } from "./actionTypes";

export const addTodo = (todo) => {
  return { type: ADD_TODO, todo };
};

export const delTodo = (todo) => {
  return { type: REMOVE_TODO, todo };
};
