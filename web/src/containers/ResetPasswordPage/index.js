import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

import ResetPassword from './components/ResetPassword';
import {
  selectResetPasswordSuccessMessage,
  selectResetPasswordErrorMessage,
  selectHasError,
  selectIsLoading,
} from 'containers/AuthContainer/meta/selectors';
import { resetPassword } from 'containers/AuthContainer/meta/actions';
import { formFields } from './meta/configObjects';
import { validate } from './meta/validate';

const mapStateToProps = (state) => ({
  formFields,
  resetPasswordSuccessMessage: selectResetPasswordSuccessMessage(state),
  resetPasswordErrorMessage: selectResetPasswordErrorMessage(state),
  loading: selectIsLoading(state),
  error: selectHasError(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchResetPassword: () => dispatch(resetPassword()),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const resetPasswordForm = reduxForm({ validate, form: 'resetPassword' });

export default compose(withConnect, resetPasswordForm)(ResetPassword);
