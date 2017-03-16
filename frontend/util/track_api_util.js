export const createTrack = track => (
  $.ajax({
    url: "api/tracks",
    method: "POST",
    data: {
      track
    }
  })
);

export const removeTrack = track => (
  $.ajax({
    url: `api/tracks/${track.id}`,
    method: "DELETE"
  })
);

export const updateTrack = track => (
  $.ajax({
    url: `api/tracks/${track.id}`,
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
