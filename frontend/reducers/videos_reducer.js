import {RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO} from '../actions/video_actions'

const VideoReducer = ( state = {}, action ) => {
  switch (action.key) {
    case RECEIVE_ALL_VIDEOS:
      return action.videos
    case RECEIVE_VIDEO:
      return Object.assign({}, state, {[action.video.id]: action.video})
    case REMOVE_VIDEO:
      let oldState = Object.assign({}, oldState);
      delete oldState[action.videoId]
      return oldState
    default:
      return oldState
  }
}

export default VideoReducer