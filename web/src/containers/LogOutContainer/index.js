import { connect } from 'react-redux';
import { logOut } from '../AuthContainer/meta/actions';
import LogOut from './components/LogOut';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  logOut,
};

const LogOutContainer = connect(mapStateToProps, mapDispatchToProps)(LogOut);

export default LogOutContainer;
