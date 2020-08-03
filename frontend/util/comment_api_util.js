export const fetchComments = () =>
  $.ajax({
    url: "/api/comments",
  });

export const fetchComment = (commentId) =>
  $.ajax({
    url: `/api/comments/${commentId}`,
  });

export const createComment = (comment) =>
  $.ajax({
    method: "POST",
    url: `/api/comments`,
    data: { comment }
  });

export const deleteComment = (commentId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/comments/${commentId}`,
  });
