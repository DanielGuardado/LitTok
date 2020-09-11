import { combineReducers } from "redux";

import UsersReducer from "./users_reducers";
import VideoReducer from "./videos_reducer";
import CommentsReducer from "./comments_reducer";
import LikesReducer from "./likes_reducer";
import FollowReducer from "./follow_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  videos: VideoReducer,
  comments: CommentsReducer,
  likes: LikesReducer,
  follows: FollowReducer,
});

export default EntitiesReducer;
