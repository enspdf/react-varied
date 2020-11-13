import { combineReducers } from "redux";
import { userReducer } from "./user";
import { notificationReducer } from "./notification";
import { reducer as formReducer } from "redux-form";

export const reducer = combineReducers({
  user: userReducer,
  form: formReducer,
  notification: notificationReducer,
});
