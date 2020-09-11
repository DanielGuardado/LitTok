// import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from "../actions/follow_actions";

// const FollowsReducer = (state = {}, action) => {
//   Object.freeze(state);
//   let nextState = Object.assign({}, state);
//   switch (action.type) {
//     case RECEIVE_FOLLOW:
//       return Object.assign({}, state, {
//         [action.follow.followee_id]: action.follow,
//       });
//     case REMOVE_FOLLOW:
//       debugger;
//       delete nextState[action.follow.id];
//       return nextState;
//     default:
//       return state;
//   }
// };
// export default FollowsReducer;
