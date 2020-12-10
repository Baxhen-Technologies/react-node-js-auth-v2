import * as constants from './constants';

export const verifyEmailDefault = (payload) => ({
  type: constants.VERIFY_EMAIL_DEFAULT,
  payload,
});
