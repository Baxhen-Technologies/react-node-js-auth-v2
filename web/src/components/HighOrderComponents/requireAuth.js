import React, { Component } from 'react';
import { history } from '../../history';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  return ComposedComponent;
};
