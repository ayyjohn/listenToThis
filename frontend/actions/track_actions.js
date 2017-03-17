import * as TrackAPIUtil from '../util/track_api_util';
import { clearErrors,
         receiveNewTrackErrors,
         receiveGetTrackErrors } from './error_actions';

export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';

export const createTrack = track => dispatch => (
  TrackAPIUtil.createTrack(track)
    .then( newTrack => dispatch(receiveTrack(newTrack)),
    error => dispatch(receiveNewTrackErrors(error.responseJSON)))
    .then( () => dispatch(clearErrors()))
);

export const getTrack = id => dispatch => (
  TrackAPIUtil.getTrack(id)
    .then( currentTrack => dispatch(receiveTrack(currentTrack)),
    error => dispatch(receiveGetTrackErrors(error.responseJSON)))
    .then( () => dispatch(clearErrors()))
);

const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});
