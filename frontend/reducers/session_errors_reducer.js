import { RECEIVE_ERRORS, CLEAR_ERRORS } from "../actions/session_actions";

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return []
    default:
      return [];
  }
};

export default SessionErrorsReducer;
