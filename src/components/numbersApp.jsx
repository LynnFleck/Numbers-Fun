import React, { Component } from 'react';
import NumbersTrivia from './numbersTrivia.jsx';
import NumbersDate from './numbersDate.jsx';

class NumbersApp extends Component {

  render() {
    return (
      <div>
        <NumbersTrivia />
        <NumbersDate />
      </div>
      );
  };
}

module.exports = NumbersApp;
