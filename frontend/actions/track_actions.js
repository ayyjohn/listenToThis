import * as TrackAPIUtil from '../util/track_api_util';
import { clearErrors,
         receiveNewTrackErrors,
         receiveGetTrackErrors,
         receiveUpdateTrackErrors } from './error_actions';

export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';

export const createTrack = track => dispatch => (
  TrackAPIUtil.createTrack(track)
    .then( newTrack => dispatch(receiveTrack(newTrack)),
    error => dispatch(receiveNewTrackErrors(error.responseJSON)))
);

export const updateTrack = (track, id) => dispatch => (
  TrackAPIUtil.updateTrack(track, id)
    .then( updatedTrack => dispatch(receiveTrack(updatedTrack)),
    error => dispatch(receiveUpdateTrackErrors(error.responseJSON)))
);

export const getTrack = id => dispatch => (
  TrackAPIUtil.getTrack(id)
    .then( currentTrack => dispatch(receiveTrack(currentTrack)),
    error => dispatch(receiveGetTrackErrors(error.responseJSON)))
);

export const getTracks = searchParam => dispatch => (
  TrackAPIUtil.getTracks(searchParam)
  .then( tracks => dispatch(receiveTracks(tracks)))
);

const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});
