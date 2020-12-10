import logo from '../../../assets/logo.png';

export const headerConfig = [
  {
    cond: 'Quando o usuário esta autenticado',
    // condition: { first: props.authenticated, second: true },
    logoTab: { logo, to: '/feature' },
    tabs: [
      { label: 'Feature', to: '/feature', className: 'tab', valueActive: 0 },
      {
        label: 'Sign Out',
        to: '/signout',
        className: 'lastTab',
        valueActive: 2,
      },
    ],
  },
  {
    cond: 'Quando o usuário não esta autenticado',
    // condition: { first: props.authenticated, second: false },
    logoTab: { label: 'Logo Aqui', to: '/' },
    tabs: [
      { label: 'Home', to: '/', className: 'tab', valueActive: 0 },
      { label: 'Login', to: '/login', className: 'tab', valueActive: 1 },
      {
        label: 'Cadastro',
        to: '/signup',
        className: 'lastTab',
        valueActive: 2,
      },
    ],
  },
];

export const linksConfig = [
  { path: '/', linkValue: 0 },
  { path: '/feature', linkValue: 0 },
  { path: '/signout', linkValue: 2 },
  // { path: '/about', linkValue: 1 },
  { path: '/signup', linkValue: 2 },
  { path: '/login', linkValue: 1 },
  { path: '/recoverPassword', linkValue: 2 },
];
