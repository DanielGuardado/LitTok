import * as FollowAPIUtil from "../util/follow_api_util";

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

const receiveFollow = (follow) => ({
  type: RECEIVE_FOLLOW,
  follow,
});
const removeFollow = (follow) => ({
  type: REMOVE_FOLLOW,
  follow,
});

export const createFollow = (follow) => (dispatch) =>
  FollowAPIUtil.createFollow(follow).then((follow) =>
    dispatch(receiveFollow(follow))
  );

export const deleteFollow = (id) => (dispatch) =>
  FollowAPIUtil.deleteFollow(id).then((follow) =>
    dispatch(removeFollow(follow))
  );
