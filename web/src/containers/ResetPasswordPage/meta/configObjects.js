import { InputPasswordField } from 'components/ReduxForm/TextInput/InputPasswordField';
export const formFields = [
  {
    label: 'components.formFields.formPassword',
    name: 'password',
    type: 'password',
    className: 'input',
    noValueError: 'components.formFields.formPasswordError',
    inputType: InputPasswordField,
  },
  {
    label: 'components.formFields.formConfirmPassword',
    name: 'confirmPassword',
    type: 'password',
    className: 'input',
    noValueError: 'components.formFields.formConfirmPasswordError',
    inputType: InputPasswordField,
  },
];
