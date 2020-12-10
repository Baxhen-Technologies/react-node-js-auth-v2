import { connect } from 'react-redux';
import { selectIsAuthenticated } from '../AuthContainer/meta/selectors';
import {
  headerConfig,
  linksConfig,
} from '../NavigationContainer/meta/configObjects';
import Navigation from './components/Navigation';

const mapStateToProps = (state) => ({
  headerConfig,
  linksConfig,
  isAuthenticated: selectIsAuthenticated(state),
});

const mapDispatchToProps = {};

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);

export default NavigationContainer;
