export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

import * as LikeAPIutil from "../util/likes_api_util";

const receiveAllLikes = (likes) => ({
  type: RECEIVE_ALL_LIKES,
  likes,
});
const receiveLike = (like) => ({
  type: RECEIVE_LIKE,
  like,
});
const removeLike = (likeId) => ({
  type: REMOVE_LIKE,
  likeId,
});

export const fetchLikes = () => (dispatch) =>
  LikeAPIutil.fetchLikes().then((likes) => dispatch(receiveAllLikes(likes)));
export const fetchLike = (likeId) => (dispatch) =>
  LikeAPIutil.fetchLike(likeId).then((like) => dispatch(receiveLike(like)));
export const createLike = (like) => (dispatch) =>
  LikeAPIutil.createLike(like).then((like) => dispatch(receiveLike(like)));
export const deleteLike = (likeId) => (dispatch) =>
  LikeAPIutil.deleteLike(likeId).then(() => dispatch(removeLike(likeId)));
