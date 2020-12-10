import { InputPasswordField } from 'components/ReduxForm/TextInput/InputPasswordField';
import { InputTextField } from 'components/ReduxForm/TextInput/InputTextField';

export const formFields = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    className: 'input',
    noValueError: 'Digite seu email para fazer login',
    inputType: InputTextField,
  },
  {
    label: 'Senha',
    name: 'password',
    type: 'password',
    className: 'input',
    noValueError: 'Digite sua senha para fazer login',
    inputType: InputPasswordField,
  },
];
