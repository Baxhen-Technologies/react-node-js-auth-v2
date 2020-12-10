import { connect } from 'react-redux';
import { compose } from 'redux';
import CONT_CAMEL_NAME from './components/CONT_NAME';
import { getCONT_CAMEL_NAME } from './meta/actions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getCONT_CAMEL_NAME,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(CONT_CAMEL_NAME);
