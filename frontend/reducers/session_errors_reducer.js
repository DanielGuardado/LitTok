import { RECEIVE_USER, RECEIVE_ERRORS } from "../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return aclientInformation.errors;
    case RECEIVE_USER:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;
