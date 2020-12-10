// import { createSelector } from 'reselect';
import { initialState } from './reducer';
/**
 * Get Auth
 * @param state
 * @returns {Object}
 */
const selectAuth = (state) => state.auth || initialState;

const selectIsAuthenticated = (state) => selectAuth(state).isAuthenticated;
const selectIsLoading = (state) => selectAuth(state).loading;
const selectHasError = (state) => selectAuth(state).error;

const selectRecoverPasswordSuccessMessage = (state) =>
  selectAuth(state).recoverPasswordSuccessMessage;
const selectRecoverPasswordErrorMessage = (state) =>
  selectAuth(state).recoverPasswordErrorMessage;

const selectResetPasswordSuccessMessage = (state) =>
  selectAuth(state).resetPasswordSuccessMessage;
const selectResetPasswordErrorMessage = (state) =>
  selectAuth(state).resetPasswordErrorMessage;

const selectSignUpSuccessMessage = (state) =>
  selectAuth(state).signUpSuccessMessage;
const selectSignUpErrorMessage = (state) =>
  selectAuth(state).signUpErrorMessage;

const selectSignInErrorMessage = (state) =>
  selectAuth(state).signInErrorMessage;

const selectVerifyEmailSuccessMessage = (state) =>
  selectAuth(state).verifyEmailSuccessMessage;
const selectVerifyEmailErrorMessage = (state) =>
  selectAuth(state).verifyEmailErrorMessage;

export {
  selectAuth,
  selectIsAuthenticated,
  selectRecoverPasswordSuccessMessage,
  selectRecoverPasswordErrorMessage,
  selectResetPasswordSuccessMessage,
  selectResetPasswordErrorMessage,
  selectSignUpSuccessMessage,
  selectSignUpErrorMessage,
  selectVerifyEmailSuccessMessage,
  selectVerifyEmailErrorMessage,
  selectSignInErrorMessage,
  selectIsLoading,
  selectHasError,
};
