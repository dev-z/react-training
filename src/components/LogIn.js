import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logIn } from '../store/actions';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const { logUserIn } = this.props;
    // Call action
    logUserIn(email);
  }

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Please log in to continue</h3>
        <label htmlFor="email">
          Email:
          <input type="text" value={email} onChange={this.handleInputChange} name="email" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" value={password} onChange={this.handleInputChange} name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

LogIn.propTypes = {
  logUserIn: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  logUserIn: logIn,
};

export default connect(null, mapDispatchToProps)(LogIn);
