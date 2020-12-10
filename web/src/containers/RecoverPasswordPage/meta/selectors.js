import { createSelector } from 'reselect';
import { initialState } from './reducer';
/**
 * Get RecoverPassword
 * @param state
 * @returns {Object}
 */

const selectRecoverPasswordPageDomain = (state) =>
  state.form.recoverPassword.values || initialState;

const makeSelectRecoverPasswordPage = () =>
  createSelector(selectRecoverPasswordPageDomain, (substate) => {
    return substate;
  });

export default makeSelectRecoverPasswordPage;
export { selectRecoverPasswordPageDomain };
