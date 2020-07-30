import { combineReducers } from "redux";

import UsersReducer from "./users_reducers";
import VideoReducer from "./videos_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  videos: VideoReducer,
});

export default EntitiesReducer;
