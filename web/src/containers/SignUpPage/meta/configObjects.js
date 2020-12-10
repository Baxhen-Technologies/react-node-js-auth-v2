import { InputPasswordField } from 'components/ReduxForm/TextInput/InputPasswordField';
import { InputTextField } from 'components/ReduxForm/TextInput/InputTextField';

export const formFields = [
  {
    label: 'Nome',
    name: 'username',
    type: 'text',
    className: 'input',
    noValueError: 'Digite seu nome',
    inputType: InputTextField,
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    className: 'input',
    noValueError: 'Digite seu email',
    inputType: InputTextField,
  },
  {
    label: 'Senha',
    name: 'password',
    type: 'password',
    className: 'input',
    noValueError: 'Digite sua senha',
    inputType: InputPasswordField,
  },
  {
    label: 'Confirme a Senha',
    name: 'confirmPassword',
    type: 'password',
    className: 'input',
    noValueError: 'Digite a confirmação de senha',
    inputType: InputPasswordField,
  },
];
