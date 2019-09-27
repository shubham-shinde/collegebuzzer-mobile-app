import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as userActions from '../actions/actions';

const authHandler = (Component) => {
  class Handler extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillMount() {
      this.props.checkForTheToken();
      setTimeout(this.checkAuth, 0)
    }

    checkAuth = () => {
      if (!this.props.user.isLoggedIn) {
        this.props.replaceTo('/login');
      }
    }

    render() {
      return this.props.user.isLoggedIn ? <Component /> : null;
    }
  }

  // const { object } = PropTypes;
  // Handler.propTypes = {
  //   actions: object.isRequired,
  //   user: object.isRequired,
  //   location: object.isRequired
  // }

  function mapStateToProps(state) {
    return {
      user: state.user
    }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(userActions, dispatch)
  }

  return connect(mapStateToProps, mapDispatchToProps)(Handler);
}

export default authHandler;
