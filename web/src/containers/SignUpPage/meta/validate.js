import _ from 'lodash';
import { validateEmail } from 'utils/HelperFunctions';
import { formFields } from './configObjects';

export const validate = (values, { t }) => {
  const errors = {};
  errors.email = validateEmail(values.email || '');
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = t(
      'components.signUpPage.formPasswordUnMatchError'
    );
  }

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) errors[name] = t(noValueError);
  });

  return errors;
};
