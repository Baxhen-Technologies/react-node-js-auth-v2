import { InputPasswordField } from 'components/ReduxForm/TextInput/InputPasswordField';
import { InputTextField } from 'components/ReduxForm/TextInput/InputTextField';

export const formFields = [
  {
    label: 'components.signUpPage.formName',
    name: 'username',
    type: 'text',
    className: 'input',
    noValueError: 'components.signUpPage.formNameError',
    inputType: InputTextField,
  },
  {
    label: 'components.signUpPage.formEmail',
    name: 'email',
    type: 'email',
    className: 'input',
    noValueError: 'Digite seu email',
    inputType: InputTextField,
  },
  {
    label: 'components.signUpPage.formPassword',
    name: 'password',
    type: 'password',
    className: 'input',
    noValueError: 'Digite sua senha',
    inputType: InputPasswordField,
  },
  {
    label: 'components.signUpPage.formConfirmPassword',
    name: 'confirmPassword',
    type: 'password',
    className: 'input',
    noValueError: 'Digite a confirmação de senha',
    inputType: InputPasswordField,
  },
];
