export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_LOG_IN_ERRORS = 'RECEIVE_LOG_IN_ERRORS';
export const RECEIVE_LOG_OUT_ERRORS = 'RECEIVE_LOG_OUT_ERRORS';
export const RECEIVE_SIGN_UP_ERRORS = 'RECEIVE_SIGN_UP_ERRORS';

export const clearErrors = errors => ({
  type: CLEAR_ERRORS
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
