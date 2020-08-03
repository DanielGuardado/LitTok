export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

import * as CommentAPIutil from "../util/comment_api_util";

const receiveAllComments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments,
});
const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment,
});
const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId,
});

export const fetchComments = () => (dispatch) =>
  CommentAPIutil.fetchComments().then((comments) =>
    dispatch(receiveAllComments(comments))
  );
export const fetchComment = (commentId) => (dispatch) =>
  CommentAPIutil.fetchComment(commentId).then((comment) =>
    dispatch(receiveComment(comment))
  );
export const createComment = (comment) => (dispatch) =>
  CommentAPIutil.createComment(comment).then((comment) =>
    dispatch(receiveComment(comment))
  );
export const deleteComment = (commentId) => (dispatch) =>
  CommentAPIutil.deleteComment(commentId).then(() =>
    dispatch(removeComment(commentId))
  );
