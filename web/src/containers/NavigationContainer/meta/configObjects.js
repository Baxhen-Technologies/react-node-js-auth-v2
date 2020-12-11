import logo from '../../../assets/logo.png';

export const headerConfig = [
  {
    cond: 'Quando o usuário esta autenticado',
    // condition: { first: props.authenticated, second: true },
    logoTab: { logo, to: '/feature' },
    tabs: [
      {
        label: 'components.navbar.feature',
        to: '/feature',
        className: 'tab',
        valueActive: 0,
      },
      {
        label: 'components.navbar.signOut',
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
      {
        label: 'components.navbar.home',
        to: '/',
        className: 'tab',
        valueActive: 0,
      },
      {
        label: 'components.navbar.login',
        to: '/login',
        className: 'tab',
        valueActive: 1,
      },
      {
        label: 'components.navbar.signUp',
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
