import React, { Component } from 'react';
import Greeting from "./Greeting";

class Repetitive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: "Barney" },
        { id: 2, name: "Ted" },
        { id: 3, name: "Marshall" },
        { id: 4, name: "Lily" },
        { id: 5, name: "Robin" },
      ]
    };
  }
  render() {
    const { data } = this.state;
    const greetingList = data.map(each => <Greeting username={each.name} key={each.id}/>);
    return (
      <div>
        {greetingList}
      </div>
    );
  }
}

export default Repetitive;