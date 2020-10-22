import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { todos, addTodo, delTodo, ToDo } from "./todos";
import { posts, fetchPosts } from "./posts";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = combineReducers({
  todos,
  posts,
});

export default createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export { addTodo, delTodo, ToDo, fetchPosts };
