export const signUp = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user },
  });

export const login = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user },
  });

export const logout = () =>
  $.ajax({
    method: "DELETE",
    url: "/api/session",
  });

export const demoUser = () =>
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: {
      username: "123456",
      password: "123456",
    },
  });
