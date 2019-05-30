/**
 * Demonstrates data-binding, event handling
 */
import React, { Component } from 'react';

class FormOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      error: null
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    this.props.onSubmit('form1', {
      name
    });
  }

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={this.handleNameChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FormOne;