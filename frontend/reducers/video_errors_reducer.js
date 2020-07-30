import { RECEIVE_ERRORS, CLEAR_ERRORS } from "../actions/video_actions";

const VideoErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return action.errors;
    default:
      return [];
  }
};

export default VideoErrorsReducer;
