import _ from 'lodash';
import { validateEmail } from 'utils/HelperFunctions';
import { formFields } from './configObjects';

export const validate = (values) => {
  const errors = {};
  errors.email = validateEmail(values.email || '');
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'As senhas não conferem';
  }

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) errors[name] = noValueError;
  });

  return errors;
};
