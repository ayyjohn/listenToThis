export const POPULATE_QUEUE = "POPULATE_QUEUE";
export const UPDATE_INDEX = "UPDATE_INDEX";
export const CLEAR_QUEUE = "CLEAR_QUEUE";

export const populateQueue = (tracks, index) => ({
  type: POPULATE_QUEUE,
  tracks,
  index
});

export const updateIndex = index => ({
  type: UPDATE_INDEX,
  index
});

export const clearQueue = () => ({
  type: CLEAR_QUEUE
});
