import { ADD_TODO, REMOVE_TODO } from "./actionTypes";

const initialData = [];

export const todos = (state = initialData, { type, todo }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, todo];
    case REMOVE_TODO:
      return state.filter(({ id }) => id !== todo.id);
    default:
      return state;
  }
};
