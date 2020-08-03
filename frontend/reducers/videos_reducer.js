import {
  RECEIVE_ALL_VIDEOS,
  RECEIVE_VIDEO,
  REMOVE_VIDEO,
} from "../actions/video_actions";
//fix that state
const VideoReducer = (state = {}, action) => {
  Object.freeze(state);
  let copyState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return action.videos;
    case RECEIVE_VIDEO:
      return Object.assign(copyState, action.video );
    case REMOVE_VIDEO:
      delete copyState[action.videoId];
      return copyState;
    default:
      return state;
  }
};

export default VideoReducer;
