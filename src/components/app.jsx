import React from 'react';
import NumbersTrivia from './numbersTrivia.jsx';
import NumbersMath from './numbersMath.jsx';
import NumbersDate from './numbersDate.jsx';

const App = () => {
  return(
    <div>
      <h1>Fun with Numbers</h1>
      <NumbersTrivia />
      <NumbersMath />
      <NumbersDate />
    </div>
      );
}

module.exports = App;
