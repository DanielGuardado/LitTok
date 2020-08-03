import {
  RECEIVE_ALL_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
} from "../actions/comment_actions";

const CommentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      return Object.assign({}, state, { [action.comment.id]: action.comment });
    case REMOVE_COMMENT:
      let oldState = Object.assign({}, state);
      delete oldState[action.commentId];
      return oldState;
    default:
      return state;
  }
};

export default CommentsReducer;
