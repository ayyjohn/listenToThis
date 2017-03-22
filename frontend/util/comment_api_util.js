export const createComment = comment => (
  $.ajax({
    url: "api/comments",
    method: "POST",
    data: {
      comment
    }
  })
);

export const removeComment = id => (
  $.ajax({
    url: `api/comments/${id}`,
    method: "DELETE"
  })
);

export const getComments = trackId => (
  $.ajax({
    url: `api/comments`,
    method: "GET",
    data: {
      trackId
    }
  })
);
