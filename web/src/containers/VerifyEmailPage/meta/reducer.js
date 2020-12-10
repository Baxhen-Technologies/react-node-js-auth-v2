import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  token: '',
  email: '',
};

/* eslint-disable no-param-reassign */
const VerifyEmail = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.VERIFY_EMAIL_DEFAULT:
        draft.token = action.payload.token;
        draft.email = action.payload.email;
        break;
      default:
        break;
    }
  });

export default VerifyEmail;
