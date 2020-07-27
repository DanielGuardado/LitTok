import { combineReducers } from "redux";

import usersReducer from "./users_reducers";

const entitiesReducer = combineReducers({
  users: usersReducer,
});

export default entitiesReducer;
