export const POPULATE_QUEUE = "POPULATE_QUEUE";

export const populateQueue = (tracks, index) => ({
  type: POPULATE_QUEUE,
  tracks,
  index
});
