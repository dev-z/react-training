import React from 'react';

class SecondComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: new Date()
    };
    this.timerId = null;
    console.log('I am in constructor');
  }

  componentDidMount() {
    console.log('I am in componentDidMount');
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate() {
    console.log('I am in componentDidUpdate');
  }

  shouldComponentUpdate() {
    console.log('I am in shouldComponentUpdate');
    return true;
  }

  componentWillUnmount() {
    console.log('I am in componentWillUnmount');
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    console.log('I am in render')
    return (
      <div>
        <h1>Hello World</h1> 
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default SecondComponent;