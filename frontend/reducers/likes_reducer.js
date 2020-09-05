import {
  RECEIVE_ALL_LIKES,
  RECEIVE_LIKE,
  REMOVE_LIKE,
} from "../actions/like_actions";

const LikesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_LIKES:
      return action.likes;
    case RECEIVE_LIKE:
      // return Object.assign({}, { [action.like.id]: action.like });
      return Object.assign(nextState, { [action.like.id]: action.like });
    case REMOVE_LIKE:
      // let oldState = Object.assign({}, state);
      delete nextState[action.likeId];
      return nextState;
    default:
      return state;
  }
};

export default LikesReducer;
