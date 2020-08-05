export const fetchLikes = () =>
  $.ajax({
    url: "/api/likes",
  });

export const fetchLike = (likeId) =>
  $.ajax({
    url: `/api/likes/${likeId}`,
  });

export const createLike = (like) =>
  $.ajax({
    method: "POST",
    url: "/api/likes",
    data: { like },
  });

export const deleteLike = (likeId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/likes/${likeId}`,
  });
