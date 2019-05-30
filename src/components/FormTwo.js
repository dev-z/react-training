import React, { Component } from 'react';

class FormTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myTextarea: '',
      fruit: 'mango',
      myCheckBox: false
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  submit = () => {
    this.props.onSubmit('form2', {
      fruit: this.state.fruit
    });
  }

  render() {
    const { fruit } = this.state;
    return (
      <div>
        <label>
          Pick your favorite flavor:
          <select value={fruit} onChange={this.handleInputChange} name="fruit">
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <button onClick={this.submit}>Sumbit</button>
      </div>
    );
  }
}

export default FormTwo;