import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { history } from './history';
import store from './store/store';

export default ({ children }) => {
  return (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
};
