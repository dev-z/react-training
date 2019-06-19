import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut } from '../store/actions';

class Profile extends Component {
  logout = () => {
    this.props.logUserOut();
  }
  render() {
    return (
      <div>
        <h1>Hello {this.props.user.email}</h1>
        <button onClick={this.logout}>Log out</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  logUserOut: logOut
}

export default connect(null, mapDispatchToProps)(Profile);