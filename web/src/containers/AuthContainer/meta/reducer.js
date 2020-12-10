import produce from 'immer';
import { getDataFromStorage } from '../../../utils/cookies';
import * as constants from './constants';

const { token } = getDataFromStorage();

export const initialState = {
  isAuthenticated: !!token,
  loading: false,
  error: false,
};

/* eslint-disable no-param-reassign */
const Auth = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.LOGIN:
        draft.loading = true;
        break;
      case constants.LOGIN_SUCCESS:
        draft.isAuthenticated = true;
        delete draft.signUpErrorMessage;
        delete draft.signInErrorMessage;
        draft.loading = false;
        draft.error = false;
        break;
      case constants.LOGIN_ERROR:
        draft.signInErrorMessage = action.payload;
        draft.loading = false;
        draft.error = true;
        break;
      case constants.SIGN_UP:
        draft.loading = true;
        break;
      case constants.SIGN_UP_SUCCESS:
        draft.signUpSuccessMessage = action.payload;
        delete draft.signUpErrorMessage;
        draft.loading = false;
        draft.error = false;
        break;
      case constants.SIGN_UP_ERROR:
        draft.signUpErrorMessage = action.payload;
        draft.loading = false;
        draft.error = true;
        break;
      case constants.RECOVER_PASSWORD:
        draft.loading = true;
        break;
      case constants.RECOVER_PASSWORD_SUCCESS:
        draft.recoverPasswordSuccessMessage = action.payload;
        delete draft.recoverPasswordErrorMessage;
        draft.loading = false;
        draft.error = false;
        break;
      case constants.RECOVER_PASSWORD_ERROR:
        draft.recoverPasswordErrorMessage = action.payload;
        draft.loading = false;
        draft.error = true;
        break;
      case constants.RESET_PASSWORD:
        draft.loading = true;
        break;
      case constants.RESET_PASSWORD_SUCCESS:
        draft.resetPasswordSuccessMessage = action.payload;
        delete draft.resetPasswordErrorMessage;
        draft.loading = false;
        draft.error = false;
        break;
      case constants.RESET_PASSWORD_ERROR:
        draft.resetPasswordErrorMessage = action.payload;
        draft.loading = false;
        draft.error = true;
        break;
      case constants.VERIFY_EMAIL:
        draft.loading = true;
        break;
      case constants.VERIFY_EMAIL_SUCCESS:
        draft.verifyEmailSuccessMessage = action.payload;
        delete draft.verifyEmailErrorMessage;
        draft.loading = false;
        draft.error = false;
        break;
      case constants.VERIFY_EMAIL_ERROR:
        draft.verifyEmailErrorMessage = action.payload;
        draft.loading = false;
        draft.error = true;
        break;
      case constants.LOGOUT:
        draft.isAuthenticated = false;
        break;
      default:
        break;
    }
  });

export default Auth;
