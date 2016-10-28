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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  getMathTrivia() {
    const Url = `http://numbersapi.com/${this.state.digits}/math?fragment=true&json=true`;
    console.log(Url);
    request.get(Url)
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
    e.preventDefault();
    const newDigits = e.target.value;
    this.setState({ digits: newDigits });
  }

  componentDidMount() {
  }
  render() {
    return (
      <div>
        <form id="digits-box">
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
        <p>{this.state.data.number}</p>
        <p>type is {this.state.data.type}</p>
        <NumbersTrivia />
        <NumbersMath />
        <NumbersDate />
      </div>

      );
  };
}

module.exports = NumbersAppearance;
