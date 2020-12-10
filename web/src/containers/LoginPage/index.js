/**
 *
 * LoginPage
 *
 */
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

import LoginPage from './components/LoginPage';
import { getAuth } from '../AuthContainer/meta/actions';
import useStyles from './components/styles';
import { validate } from './meta/validate';
import { formFields } from './meta/configObjects';
import { withMediaQuery } from 'components/HighOrderComponents/withMediaQuery';
import { selectSignInErrorMessage } from 'containers/AuthContainer/meta/selectors';

const mapStateToProps = (state) => ({
  signInErrorMessage: selectSignInErrorMessage(state),
  formFields,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchAuthenticate: () => dispatch(getAuth()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const loginForm = reduxForm({ validate, form: 'login' });
const withMediaQueryProps = withMediaQuery([
  [
    'isMobile',
    (theme) => theme.breakpoints.down('xs'),
    {
      defaultMatches: true,
    },
  ],
]);

export default compose(
  withConnect,
  loginForm,
  useStyles,
  withMediaQueryProps
)(LoginPage);
