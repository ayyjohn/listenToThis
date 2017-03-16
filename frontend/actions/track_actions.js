import * as TrackAPIUtil from '../util/track_api_util';
import { clearErrors,
         receiveNewTrackErrors } from './error_actions';

export const RECEIVE_TRACK = 'RECEIVE_TRACK';

export const createTrack = (track) => dispatch => (
  TrackAPIUtil.createTrack(track)
    .then( newTrack => dispatch(receiveTrack(newTrack)),
    error => dispatch(receiveNewTrackErrors(error.responseJSON)))
    .then( () => dispatch(clearErrors()))
);

const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});
