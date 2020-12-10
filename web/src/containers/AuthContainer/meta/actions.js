import * as constants from './constants';

export const getAuth = () => ({
  type: constants.LOGIN,
});

export const getAuthSuccess = (payload) => ({
  type: constants.LOGIN_SUCCESS,
  payload,
});

export const signUserUp = () => ({
  type: constants.SIGN_UP,
});

export const getAuthError = (payload) => ({
  type: constants.SIGN_UP_ERROR,
  payload,
});
export const getLoginError = (payload) => ({
  type: constants.LOGIN_ERROR,
  payload,
});
export const getAuthFeedback = (payload) => ({
  type: constants.SIGN_UP_SUCCESS,
  payload,
});
export const logOut = () => {
  return {
    type: constants.LOGOUT,
  };
};

export const recoverPassword = () => ({
  type: constants.RECOVER_PASSWORD,
});
export const recoverPasswordSuccess = (payload) => ({
  type: constants.RECOVER_PASSWORD_SUCCESS,
  payload,
});
export const recoverPasswordError = (payload) => ({
  type: constants.RECOVER_PASSWORD_ERROR,
  payload,
});

export const resetPassword = () => ({
  type: constants.RESET_PASSWORD,
});

export const resetPasswordFeedback = (payload) => ({
  type: constants.RESET_PASSWORD_SUCCESS,
  payload,
});
export const verifyEmail = (payload) => ({
  type: constants.VERIFY_EMAIL,
  payload,
});

export const verifyEmailFeedback = (payload) => ({
  type: constants.VERIFY_EMAIL_SUCCESS,
  payload,
});
