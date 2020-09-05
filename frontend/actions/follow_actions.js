import * as FollowAPIUtil from "../util/follow_api_util";

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

const receiveFollow = (follow) => ({
  type: RECEIVE_FOLLOW,
  follow,
});
const removeFollow = (followId) => ({
  type: REMOVE_FOLLOW,
  followId,
});

export const createFollow = (follow) => (dispatch) =>
  FollowAPIUtil.createFollow(follow).then((follow) =>
    dispatch(receiveFollow(follow))
  );

export const deleteFollow = (followId) => (dispatch) =>
  FollowAPIUtil.deleteFollow(followId).then(() =>
    dispatch(removeFollow(followId))
  );
