export const POPULATE_QUEUE = "POPULATE_QUEUE";
export const UPDATE_INDEX = "UPDATE_INDEX";
export const CLEAR_QUEUE = "CLEAR_QUEUE";
export const UPDATE_PLAYING = "UPDATE_PLAYING";
export const UPDATE_ID = "UPDATE_ID";

export const populateQueue = (tracks, index) => ({
  type: POPULATE_QUEUE,
  tracks,
  index
});

export const updateId = id => ({
  type: UPDATE_ID,
  id
});

export const updateIndex = index => ({
  type: UPDATE_INDEX,
  index
});

export const updatePlaying = playing => ({
  type: UPDATE_PLAYING,
  playing
});

export const clearQueue = () => ({
  type: CLEAR_QUEUE
});
