import { connect } from 'react-redux';
import { compose } from 'redux';

import About from './components/About';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(About);
