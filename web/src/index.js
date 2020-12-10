import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Root from './Root';
import { Route } from 'react-router-dom';

import LoginPage from './containers/LoginPage';
import LogOutContainer from './containers/LogOutContainer';
import SignUpPage from './containers/SignUpPage';
import FeaturePage from 'containers/FeaturePage';
import RecoverPasswordPage from 'containers/RecoverPasswordPage';
import ResetPasswordPage from 'containers/ResetPasswordPage';
import VerifyEmailPage from 'containers/VerifyEmailPage';
import HomePage from 'containers/HomePage';
import AboutPage from 'containers/AboutPage';

ReactDOM.render(
  <Root>
    <App>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/signout" component={LogOutContainer} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/feature" component={FeaturePage} />
      <Route exact path="/recoverPassword" component={RecoverPasswordPage} />
      <Route
        exact
        path="/resetPassword/:token/:email"
        component={ResetPasswordPage}
      />
      <Route
        exact
        path="/verifyEmail/:token/:email"
        component={VerifyEmailPage}
      />
    </App>
  </Root>,
  document.getElementById('root')
);
