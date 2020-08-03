import { combineReducers } from "redux";

import UsersReducer from "./users_reducers";
import VideoReducer from "./videos_reducer";
import CommentsReducer from "./comments_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  videos: VideoReducer,
  comments: CommentsReducer,
});

export default EntitiesReducer;
