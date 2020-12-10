import { createSelector } from 'reselect';
import { initialState } from './reducer';
/**
 * Get RecoverPassword
 * @param state
 * @returns {Object}
 */

const selectResetPasswordPageDomain = (state) =>
  state.form.resetPassword.values || initialState;

const makeSelectResetPasswordPage = () =>
  createSelector(selectResetPasswordPageDomain, (substate) => {
    return substate;
  });

export default makeSelectResetPasswordPage;
export { selectResetPasswordPageDomain };
