import { InputPasswordField } from 'components/ReduxForm/TextInput/InputPasswordField';
import { InputTextField } from 'components/ReduxForm/TextInput/InputTextField';

export const formFields = [
  {
    label: 'components.formFields.formName',
    name: 'username',
    type: 'text',
    className: 'input',
    noValueError: 'components.formFields.formNameError',
    inputType: InputTextField,
  },
  {
    label: 'components.formFields.formEmail',
    name: 'email',
    type: 'email',
    className: 'input',
    noValueError: 'components.formFields.formEmailError',
    inputType: InputTextField,
  },
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
