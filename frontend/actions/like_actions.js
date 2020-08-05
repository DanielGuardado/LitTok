export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

import * as LikeAPIutil from "../util/likes_api_util";

const receiveAllLikes = (likes) => ({
  type: RECEIVE_ALL_LIKES,
  likes,
});
const receiveLike = (payload) => {
  if (payload.video) {
    return {
      type: RECEIVE_LIKE,
      like: payload.like,
      video: payload.video,
    };
  } else if (payload.comment) {
    return {
      type: RECEIVE_LIKE,
      like: payload.like,
      comment: payload.comment,
    };
  } else {
    return { type: "Ignore" };
  }
};
const removeLike = (payload) => {
  if (payload.video) {
    return {
      type: REMOVE_LIKE,
      likeId: payload.like.id,
      video: payload.video,
    };
  } else if (payload.comment) {
    return {
      type: REMOVE_LIKE,
      likeId: payload.like.id,
      comment: payload.comment,
    };
  } else {
    return { type: "Ignore" };
  }
};

export const fetchLikes = () => (dispatch) =>
  LikeAPIutil.fetchLikes().then((likes) => dispatch(receiveAllLikes(likes)));
export const fetchLike = (likeId) => (dispatch) =>
  LikeAPIutil.fetchLike(likeId).then((like) => dispatch(receiveLike(like)));
export const createLike = (like) => (dispatch) =>
  LikeAPIutil.createLike(like).then((payload) =>
    dispatch(receiveLike(payload))
  );
export const deleteLike = (likeId) => (dispatch) =>
  LikeAPIutil.deleteLike(likeId).then((payload) => dispatch(removeLike(payload)));
