import React from 'react';
import OperationButton from './OparationButton';
import './styles/style.css';

const signs = ['+', '-', '*', '/', '%'];

const App = () => {

  const [firstNumber, setFirstNumber] = React.useState('');
  const [secondNumber, setSecondNumber] = React.useState('');
  const [result, setResult] = React.useState();

  const handleOperation = (sign) => {
    const first = parseFloat(firstNumber);
    const second = parseFloat(secondNumber);
    if (sign === '+') {
      setResult(first + second);
    }
    else if (sign === '-') {
      setResult(first - second);
    }
    else if (sign === '*') {
      setResult(first * second);
    }
    else if (sign === '/') {
      setResult(first / second);
    }
    else if (sign === '%') {
      setResult(first % second);
    }
  };

  let i = 0;
  const signElements = [];
  while (i < signs.length) {
    const currentSign = signs[i];
    signElements.push((
      <OperationButton
        onOperation={handleOperation}
        sign={currentSign}
      />
    ));
    i = i + 1;
  }

  const handleFirstNumberChange = (event) => {
    setFirstNumber(event.target.value);
  };

  const handleSecondNumberChange = (event) => {
    setSecondNumber(event.target.value);
  };

  return (
    <div>
      <div>
        <label>First number</label>
        <input
          type="number"
          value={firstNumber}
          onChange={handleFirstNumberChange}
        />
        <label>Second number</label>
        <input
          type="number"
          value={secondNumber}
          onChange={handleSecondNumberChange}
        />
      </div>
      <div>
        {signElements}
      </div>
      <div>
        {result}
      </div>
    </div>
  );
};

export default App;