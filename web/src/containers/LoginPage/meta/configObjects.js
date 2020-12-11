import { InputPasswordField } from 'components/ReduxForm/TextInput/InputPasswordField';
import { InputTextField } from 'components/ReduxForm/TextInput/InputTextField';

export const formFields = [
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
];
