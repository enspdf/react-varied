import { combineReducers, createStore } from "redux";
import { todos, addTodo, delTodo, ToDo } from "./todos";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  todos,
});

export default createStore(reducers, composeWithDevTools());

export { addTodo, delTodo, ToDo };
