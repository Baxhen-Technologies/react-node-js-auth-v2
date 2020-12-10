import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = (state) =>
  state.form.login.values || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () =>
  createSelector(selectLoginPageDomain, (substate) => {
    return substate;
  });

export default makeSelectLoginPage;
export { selectLoginPageDomain };
