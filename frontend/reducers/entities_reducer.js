import { combineReducers } from "redux";

import UsersReducer from "./users_reducers";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
});

export default EntitiesReducer;
