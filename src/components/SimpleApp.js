import React, { Component } from 'react';
import { connect } from "react-redux";

import Profile from "./Profile";
import LogIn from "./LogIn";

class SimpleApp extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      this.props.loggedIn
        ? <Profile user={this.props.user} />
        : <LogIn />
    );
  }
}

const mapStateToProps = function(state) {
  return {
    user: state.user,
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps)(SimpleApp);