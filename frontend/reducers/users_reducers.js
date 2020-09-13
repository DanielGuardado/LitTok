import { RECEIVE_USER } from "../actions/session_actions";
import { RECEIVE_LIKE } from "../actions/like_actions";
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from "../actions/follow_actions";
import { RECEIVE_USER_PROFILE } from "../actions/user_actions";

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, {
        [action.user.id]: action.user,
      });
    case RECEIVE_USER_PROFILE:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_LIKE:
      nextState[Object.keys(nextState)[0]].likes.push(action.like);
      return nextState;
    case RECEIVE_FOLLOW:
      nextState[action.follow.follower_id].follower_relationships.push(
        action.follow
      );
      return nextState;
    case REMOVE_FOLLOW:
      // debugger;
      // delete nextState[action.follow.follower_id].follower_relationships[0];
      nextState[action.follow.follower_id].follower_relationships.forEach(
        (el) => {
          if (el.followee_id === action.follow.followee_id) {
            delete el.follow_id;
            delete el.follower_id;
            delete el.followee_id;
          }
        }
      );
      return nextState;

    // return Object.assign({}, { [action.like.id]: action.like });
    default:
      return state;
  }
};

export default UsersReducer;
