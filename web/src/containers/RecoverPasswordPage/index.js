import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

import { recoverPassword } from 'containers/AuthContainer/meta/actions';
import {
  selectRecoverPasswordSuccessMessage,
  selectRecoverPasswordErrorMessage,
  selectIsLoading,
  selectHasError,
} from 'containers/AuthContainer/meta/selectors';
import RecoverPassword from './components/RecoverPassword';
import { formFields } from './meta/configObjects';
import { validate } from './meta/validade';

const mapStateToProps = (state) => ({
  recoverPasswordSuccessMessage: selectRecoverPasswordSuccessMessage(state),
  recoverPasswordErrorMessage: selectRecoverPasswordErrorMessage(state),
  formFields,
  loading: selectIsLoading(state),
  error: selectHasError(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchRecoverPassword: () => dispatch(recoverPassword()),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const recoverPasswordForm = reduxForm({ validate, form: 'recoverPassword' });

export default compose(withConnect, recoverPasswordForm)(RecoverPassword);
