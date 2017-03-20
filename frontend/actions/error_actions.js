export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_LOG_IN_ERRORS = 'RECEIVE_LOG_IN_ERRORS';
export const RECEIVE_LOG_OUT_ERRORS = 'RECEIVE_LOG_OUT_ERRORS';
export const RECEIVE_SIGN_UP_ERRORS = 'RECEIVE_SIGN_UP_ERRORS';
export const RECEIVE_NEW_TRACK_ERRORS = 'RECEIVE_NEW_TRACK_ERRORS';
export const RECEIVE_GET_TRACK_ERRORS = 'RECEIVE_GET_TRACK_ERRORS';
export const RECEIVE_UPDATE_TRACK_ERRORS = 'RECEIVE_UPDATE_TRACK_ERRORS';
export const RECEIVE_UPDATE_USER_ERRORS = 'RECEIVE_UPDATE_USER_ERRORS';

export const clearErrors = errors => ({
  type: CLEAR_ERRORS
});

export const receiveGetTrackErrors = errors => ({
  type: RECEIVE_GET_TRACK_ERRORS,
  errors
});

export const receiveNewTrackErrors = errors => ({
  type: RECEIVE_NEW_TRACK_ERRORS,
  errors
});

export const receiveLogInErrors = errors => ({
  type: RECEIVE_LOG_IN_ERRORS,
  errors
});

export const receiveLogOutErrors = errors => ({
  type: RECEIVE_LOG_OUT_ERRORS,
  errors
});

export const receiveSignUpErrors = errors => ({
  type: RECEIVE_SIGN_UP_ERRORS,
  errors
});

export const receiveUpdateUserErrors = errors => ({
  type: RECEIVE_UPDATE_USER_ERRORS,
  errors
});

export const receiveUpdateTrackErrors = errors => ({
  type: RECEIVE_UPDATE_TRACK_ERRORS,
  errors
});
