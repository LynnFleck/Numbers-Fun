import React from 'react';
import NumbersTrivia from './numbersTrivia.jsx';
import NumbersMath from './numbersMath.jsx';
import NumbersDate from './numbersDate.jsx';

class NumbersAppearance extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the NumbersAppearance component</h1>
        <NumbersTrivia />
        <NumbersMath />
        <NumbersDate />
      </div>

      );
  };
}


module.exports = NumbersAppearance;
