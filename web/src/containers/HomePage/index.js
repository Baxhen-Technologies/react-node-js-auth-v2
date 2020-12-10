import { connect } from 'react-redux';
import { compose } from 'redux';

import Home from './components/Home';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Home);
