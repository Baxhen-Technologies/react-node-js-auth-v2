import { connect } from 'react-redux';
import { compose } from 'redux';

import CONT_CAMEL_NAME from './components/CONT_NAME';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(CONT_CAMEL_NAME);
