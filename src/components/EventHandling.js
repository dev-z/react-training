import React, { Component } from 'react';

class EventHandling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 0,
      value2: 0
    };
  }

  handleClick = (e, key) => {
    // e.preventDefault();
    this.setState((prevState) => ({
      [key]: prevState[key] + 1
    }));
  }

  render() {
    const { value1, value2 } = this.state;
    return (
      <div>
        <button onClick={(e) => this.handleClick(e, 'value1')}>
          {value1}
        </button>
        <a href="#" onClick={(e) => this.handleClick(e, 'value2')} className="aqua">
          Click me: {value2}
        </a>
      </div>
    );
  }
}

export default EventHandling;