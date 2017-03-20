export const createTrack = formData => (
  $.ajax({
    url: "api/tracks",
    method: "POST",
    contentType: false,
    processData: false,
    data: formData
  })
);

export const removeTrack = track => (
  $.ajax({
    url: `api/tracks/${track.id}`,
    method: "DELETE"
  })
);

export const updateTrack = (track, id) => (
  $.ajax({
    url: `api/tracks/${id}`,
    method: "PATCH",
    data: {
      track
    }
  })
);

export const getTrack = id => (
  $.ajax({
    url: `api/tracks/${id}`,
    method: "GET"
  })
);

export const getTracks = (searchParam = "") => (
  $.ajax({
    url: `api/tracks`,
    method: "GET",
    data: {
      searchParam
    }
  })
);
