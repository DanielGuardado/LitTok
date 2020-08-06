import {
  RECEIVE_ALL_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
  CLEAR_COMMENTS,
} from "../actions/comment_actions";

import { RECEIVE_VIDEO } from "../actions/video_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const CommentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return action.comments;
    case RECEIVE_VIDEO:
      return Object.assign({}, state, action.comments);
    case RECEIVE_LIKE:
      if (!action.comment) {
        return state
      } else {
        return Object.assign({}, state, { [action.comment.id]: action.comment })
        // return Object.assign({}, state, action.comment )
      }
    case REMOVE_LIKE:
      if (!action.comment) {
        return state
      } else {
        return Object.assign({}, state, { [action.comment.id]: action.comment })
      }
    case RECEIVE_COMMENT:
      // return Object.assign({}, { [action.comment.id]: action.comment });
      return Object.assign({}, state, { [action.comment.id]: action.comment });
    case REMOVE_COMMENT:
      let oldState = Object.assign({}, state);
      delete oldState[action.commentId];
      return oldState;
    case CLEAR_COMMENTS:
      return action.comments;
    default:
      return state;
  }
};

export default CommentsReducer;
