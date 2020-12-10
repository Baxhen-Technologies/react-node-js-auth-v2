import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the SignUp state domain
 */

const get = (state) => state.form.signup.values || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SignUp
 */

const selectSignUpFormValues = () =>
  createSelector(get, (formValues) => {
    return formValues;
  });

export default selectSignUpFormValues;
export { get as selectSignUpDomain };
