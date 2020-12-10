import _ from 'lodash';
import { validateEmail } from 'utils/HelperFunctions';
import { formFields } from './configObjects';

export const validate = (values) => {
  const errors = {};
  errors.email = validateEmail(values.email || '');

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) errors[name] = noValueError;
  });

  return errors;
};
