import { connect } from 'react-redux';
import { compose } from 'redux';

import Feature from './components/Feature';
import { getFeature } from './meta/actions';
import requireAuth from '../../components/HighOrderComponents/requireAuth';

const mapStateToProps = (state) => ({
  auth: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  getFeature,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, requireAuth)(Feature);
