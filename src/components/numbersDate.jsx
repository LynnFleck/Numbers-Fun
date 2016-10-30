import React from 'react';
import request from 'superagent';

class NumbersDate extends React.Component {
  constructor(props) {
    super(props);
    this.getDateFact = this.getDateFact.bind(this);
    this.handleChangeMonth = this.handleChangeMonth.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      month: '',
      date: '',
      fact: '',
      year: ''
    };
  }
  getDateFact() {
    const Url = `http://numbersapi.com/${this.state.month}/${this.state.date}/date?fragment=true&json=true`;
    request.get(Url)
      .then((fact) => {
        this.setState({
          fact: fact.body.text,
          year: fact.body.year
        });
      });
  }
  handleChangeMonth(e) {
    const newDigits = e.target.value;
    if ((newDigits >= 1) && (newDigits <= 12) ) {
      this.setState({ month: newDigits });
    } else {
    alert('Please select a number that is between 1 and 12')
    }
  }
  handleChangeDate(e) {
    const newDigits = e.target.value;
    if ((newDigits >= 1) && (newDigits <= 31) ) {
      this.setState({ date: newDigits });
    } else {
      alert('Please select a number that is between 1 and 31')
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.getDateFact();
  }
  render() {
    const dateTrivia =
      `${this.state.fact}` ?
        `On ${this.state.month}/${this.state.date}/${this.state.year}, ${this.state.fact}`
        : '';
    return (
      <div className="item">
        <h1>Enter a month/day and get a fun fact:</h1>
        <form id="digits-box">
          <input className="factDates"
            name="month"
            onChange={this.handleChangeMonth}
            placeholder="02"
            value={this.state.month}
          />
          <input className="factDates"
            name="date"
            onChange={this.handleChangeDate}
            placeholder="14"
            value={this.state.date}
          />
          <button
            className="btn"
            onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
        <p className="trivia">{dateTrivia}</p>
      </div>
    );
  };
}

module.exports = NumbersDate;
