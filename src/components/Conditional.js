import React from 'react';

class Conditional extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.increment(), 1000);
  }

  increment() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }
  /*
  render() {
    const { counter } = this.state;
    if (counter <= 5) {
      return (
        <h3>Hello there stranger</h3>
      );
    }
    return (
      <h3>I have known you for the last 5 seconds</h3>
    );
  }
  */

  render() {
    const { counter } = this.state;
    const colorClass = counter > 5 ? "red" : "blue";
    return (
      <div>
        <h3 className={colorClass}>Counter: {counter}</h3>
        {counter <= 5 && (
          <h3>Hello there stranger</h3>
        )}
        {counter > 5 && (
          <h3>I have known you for the last 5 seconds</h3>
        )}
      </div>
    );
  }
  
}

export default Conditional;