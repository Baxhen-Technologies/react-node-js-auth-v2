import { createSelector } from 'reselect';
import { initialState } from './reducer';
/**
 * Get RecoverPassword
 * @param state
 * @returns {Object}
 */

const selectVerifyEmailPageDomain = (state) => state || initialState;

const makeSelectVerifyEmailPage = () =>
  createSelector(selectVerifyEmailPageDomain, (substate) => {
    return substate.verifyEmail;
  });

export default makeSelectVerifyEmailPage;
export { selectVerifyEmailPageDomain };
