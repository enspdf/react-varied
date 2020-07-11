import { combineReducers } from "redux";

import newsfeedReducer from "./reducers/newsfeed-reducer";
import profileReducer from "./reducers/profile-reducer";
import userReducer from "./reducers/user-reducer";

const rootReducer = combineReducers({
  user: userReducer,
  news: newsfeedReducer,
  profile: profileReducer,
});

export default rootReducer;
