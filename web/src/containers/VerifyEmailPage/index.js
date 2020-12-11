import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';

import {
  selectVerifyEmailSuccessMessage,
  selectVerifyEmailErrorMessage,
  selectIsLoading,
  selectHasError,
} from 'containers/AuthContainer/meta/selectors';
import { verifyEmail } from 'containers/AuthContainer/meta/actions';
import VerifyEmail from './components/VerifyEmail';

const mapStateToProps = (state) => ({
  verifyEmailSuccessMessage: selectVerifyEmailSuccessMessage(state),
  verifyEmailErrorMessage: selectVerifyEmailErrorMessage(state),
  loading: selectIsLoading(state),
  error: selectHasError(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchVerifyEmail: (payload) => dispatch(verifyEmail(payload)),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withTranslation()(compose(withConnect)(VerifyEmail));
