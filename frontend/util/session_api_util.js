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
      user: {
        username: "LitToker",
        password: "123456",
      },
    },
  });
