import React, { Component } from 'react';
import request from 'superagent';
import NumbersTrivia from './numbersTrivia.jsx';
import NumbersMath from './numbersMath.jsx';
import NumbersDate from './numbersDate.jsx';

class NumbersAppearance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      digits: '',
      data: {},
    };
    this.getMathTrivia = this.getMathTrivia.bind(this);
  }
  getMathTrivia() {
    request.get(`http://numbersapi.com/${this.state.digits}/math?fragment=true&json=true`)
      .then((data) => {
        this.setState({
          data: data.body,
        });
      });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.getMathTrivia()
  }

  handleChange(e) {
    const newDigits = e.target.value;
    this.setState({ digits: newDigits });
  }

  componentDidMount() {
  }
  render() {
    return (
      <div>
        <h1>This is the NumbersAppearance component </h1>
        <form id="digits-box">
          <h1>DIGITS</h1>
          <input
            name="digits"
            onChange={this.handleChange}
            type="text"
            placeholder="enter a number"
            value={this.state.digits}
          />
          <button
            className="btn"
            onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
        <p>{this.state.digits} is {this.state.data.text}</p>
        <p>number is {this.state.data.number}</p>
        <p>type is {this.state.data.type}</p>
        <NumbersTrivia />
        <NumbersMath />
        <NumbersDate />
      </div>

      );
  };
}

module.exports = NumbersAppearance;
