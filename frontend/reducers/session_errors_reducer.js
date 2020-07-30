import { RECEIVE_ERRORS, CLEAR_ERRORS } from "../actions/session_actions";

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return state.concat(action.errors);
    case CLEAR_ERRORS:
      return [].concat(action.errors)
    default:
      return [];
  }
};

export default SessionErrorsReducer;
