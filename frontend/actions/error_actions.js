export const RECEIVE_SIGN_UP_ERRORS = 'RECEIVE_SIGN_UP_ERRORS';
export const RECEIVE_LOG_IN_ERRORS = 'RECEIVE_LOG_IN_ERRORS';
export const RECEIVE_LOG_OUT_ERRORS = 'RECEIVE_LOG_OUT_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveSignUpErrors = errors => ({
  type: RECEIVE_SIGN_UP_ERRORS,
  errors
});

const receiveLogInErrors = errors => ({
  type: RECEIVE_LOG_IN_ERRORS,
  errors
});

const receiveLogOutErrors = errors => ({
  type: RECEIVE_LOG_OUT_ERRORS,
  errors
});

const clearErrors = errors => ({
  type: CLEAR_ERRORS
});
