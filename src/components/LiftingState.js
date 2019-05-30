import React, { Component } from 'react';
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";

class LiftingState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formKey: null,
      data: null
    };
  }

  saveAnswer = (formKey, data) => {
    this.setState({ formKey, data });
  }

  render() {
    return (
     <div>
       <FormOne onSubmit={this.saveAnswer}/>
       <FormTwo onSubmit={this.saveAnswer}/>
       <br/><br/><br/>
       <p>Form Data:</p>
       <code>
         {JSON.stringify(this.state, null, 2)}
       </code>
     </div> 
    );
  }
}

export default LiftingState;