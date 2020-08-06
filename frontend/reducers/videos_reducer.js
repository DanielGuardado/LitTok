import {
  RECEIVE_ALL_VIDEOS,
  RECEIVE_VIDEO,
  REMOVE_VIDEO,
} from "../actions/video_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_COMMENT } from "../actions/comment_actions";
//fix that state
const VideoReducer = (state = {}, action) => {
  Object.freeze(state);
  let copyState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return action.videos;
    case RECEIVE_LIKE:
      if (!action.video) {
        return state;
      } else {
        return Object.assign({}, state, { [action.video.id]: action.video });
      }
    case REMOVE_LIKE:
      if (!action.video) {
        return state;
      } else {
        return Object.assign({}, state, { [action.video.id]: action.video });
      }
      //test
    case RECEIVE_COMMENT:
      if (!action.video) {
        return state;
      } else {
        return Object.assign({}, state, { [action.video.id]: action.video });
      }
    case RECEIVE_VIDEO:
      return Object.assign(copyState, { [action.video.id]: action.video });
    case REMOVE_VIDEO:
      delete copyState[action.videoId];
      return copyState;
    default:
      return state;
  }
};

export default VideoReducer;
