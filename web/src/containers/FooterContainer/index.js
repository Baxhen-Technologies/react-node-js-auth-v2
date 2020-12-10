import { connect } from 'react-redux';
import Footer from './components/Footer';
import { headerConfig } from '../NavigationContainer/meta/configObjects';

const mapStateToProps = (state) => ({
  headerConfig,
});

const mapDispatchToProps = {};

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default FooterContainer;
