export const getUser = id => (
  $.ajax({
    url: `api/users/${id}`,
    method: "GET"
  })
);

export const removeUser = id => (
  $.ajax({
    url: `api/users/${id}`,
    method: "DELETE"
  })
);

export const updateUser = (user, id) => (
  $.ajax({
    url: `api/users/${id}`,
    method: "PATCH",
    data: {
      user
    }
  })
);
