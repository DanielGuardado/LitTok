import { combineReducers } from "redux";

import UsersReducer from "./users_reducers";

const entitiesReducer = combineReducers({
  users: UsersReducer,
});

export default entitiesReducer;
