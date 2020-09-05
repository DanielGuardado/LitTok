export const fetchFollows = () =>
  $.ajax({
    url: "/api/follows",
  });

export const fetchFollow = (followId) =>
  $.ajax({
    url: `/api/follows/${followId}`,
  });

export const createFollow = (follow) =>
  $.ajax({
    method: "POST",
    url: `/api/follows`,
    data: { follow },
  });

export const deleteFollow = (followId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/follows/${followId}`,
  });
