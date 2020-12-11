import { InputPasswordField } from 'components/ReduxForm/TextInput/InputPasswordField';
import { InputTextField } from 'components/ReduxForm/TextInput/InputTextField';

export const formFields = [
  {
    label: 'components.loginPage.formEmail',
    name: 'email',
    type: 'email',
    className: 'input',
    noValueError: 'components.loginPage.formEmailError',
    inputType: InputTextField,
  },
  {
    label: 'components.loginPage.formPassword',
    name: 'password',
    type: 'password',
    className: 'input',
    noValueError: 'components.loginPage.formPasswordError',
    inputType: InputPasswordField,
  },
];
