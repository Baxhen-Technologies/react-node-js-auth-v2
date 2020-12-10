import { InputPasswordField } from 'components/ReduxForm/TextInput/InputPasswordField';
export const formFields = [
  {
    label: 'Nova senha',
    name: 'password',
    type: 'password',
    className: 'input',
    noValueError: 'Digite sua nova senha',
    inputType: InputPasswordField,
  },
  {
    label: 'Confirme a sua nova senha',
    name: 'confirmPassword',
    type: 'password',
    className: 'input',
    noValueError: 'Digite a confirmação de senha',
    inputType: InputPasswordField,
  },
];
