import _ from 'lodash';
import { formFields } from './configObjects';

export const validate = (values) => {
  const errors = {};

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) errors[name] = noValueError;
  });

  return errors;
};
