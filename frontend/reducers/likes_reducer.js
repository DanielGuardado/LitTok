import {
  RECEIVE_ALL_LIKES,
  RECEIVE_LIKE,
  REMOVE_LIKE,
} from "../actions/like_actions";

const LikesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_LIKES:
      return action.likes;
    case RECEIVE_LIKE:
      // return Object.assign({}, { [action.like.id]: action.like });
      return Object.assign({}, state, { [action.like.id]: action.like });
    case REMOVE_LIKE:
      let oldState = Object.assign({}, state);
      delete oldState[action.likeId];
      return oldState;
    default:
      return state;
  }
};

export default LikesReducer;
