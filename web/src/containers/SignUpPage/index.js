import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { withTranslation } from 'react-i18next';

import { signUserUp } from '../AuthContainer/meta/actions';
import {
  selectSignUpErrorMessage,
  selectSignUpSuccessMessage,
} from 'containers/AuthContainer/meta/selectors';

import SignUp from './components/SignUp';
import useStyles from './components/styles';
import { validate } from './meta/validate';
import { formFields } from './meta/configObjects';
import { withMediaQuery } from 'components/HighOrderComponents/withMediaQuery';

const mapStateToProps = (state) => ({
  signUpErrorMessage: selectSignUpErrorMessage(state),
  signUpSuccessMessage: selectSignUpSuccessMessage(state),
  formFields,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchSignUp: () => dispatch(signUserUp()),
  };
}

const withMediaQueryProps = withMediaQuery([
  [
    'matchesXS',
    (theme) => theme.breakpoints.down('xs'),
    {
      defaultMatches: true,
    },
  ],
  [
    'matchesSM',
    (theme) => theme.breakpoints.down('sm'),
    {
      defaultMatches: true,
    },
  ],
  [
    'matchesMD',
    (theme) => theme.breakpoints.down('md'),
    {
      defaultMatches: true,
    },
  ],
]);

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const signupForm = reduxForm({ validate, form: 'signup' });

export default withTranslation()(
  compose(withConnect, signupForm, useStyles, withMediaQueryProps)(SignUp)
);
