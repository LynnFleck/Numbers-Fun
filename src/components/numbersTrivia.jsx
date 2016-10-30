import React from 'react';
import request from 'superagent';

class NumbersTrivia extends React.Component {
  constructor(props) {
    super(props);
    this.getMathFact = this.getMathFact.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      digits: 1,
      fact: 'the loneliest number'
    };
  }

  getMathFact() {
    const Url = `http://numbersapi.com/${this.state.digits}/trivia?fragment=true&json=true`;
    request.get(Url)
      .then((fact) => {
        this.setState({
          fact: fact.body.text,
        });
      });
  }

  handleChange(e) {
    const newDigits = e.target.value;
    this.setState({ digits: newDigits });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getMathFact();
  }

  render() {
    return (
      <div className="item">
        <h1>What's your favorite number?</h1>
        <form id="digits-box">
          <input className="factNumber"
            name="digits"
            onChange={this.handleChange}
            placeholder="enter a number"
            value={this.state.digits}
          />
          <button
            className="btn"
            onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
        <p className="trivia">{this.state.digits} is {this.state.fact}</p>
      </div>
    );
  };
}

module.exports = NumbersTrivia;
