import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const addToDisplay = (value) => {
    setDisplay(display + value);
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" id="display" value={display} readOnly />
      <div className="keys">
        <button onClick={() => addToDisplay('7')}>7</button>
        <button onClick={() => addToDisplay('8')}>8</button>
        <button onClick={() => addToDisplay('9')}>9</button>
        <button onClick={() => addToDisplay('/')}>/</button>
        <button onClick={() => addToDisplay('4')}>4</button>
        <button onClick={() => addToDisplay('5')}>5</button>
        <button onClick={() => addToDisplay('6')}>6</button>
        <button onClick={() => addToDisplay('*')}>*</button>
        <button onClick={() => addToDisplay('1')}>1</button>
        <button onClick={() => addToDisplay('2')}>2</button>
        <button onClick={() => addToDisplay('3')}>3</button>
        <button onClick={() => addToDisplay('-')}>-</button>
        <button onClick={() => addToDisplay('0')}>0</button>
        <button onClick={() => addToDisplay('.')}>.</button>
        <button onClick={() => clearDisplay()}>C</button>
        <button onClick={() => addToDisplay('+')}>+</button>
        <button onClick={() => calculate()}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
