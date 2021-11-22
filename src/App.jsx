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
      <div className="row">
        <div class="col">
          <OperationButton
            onOperation={handleOperation}
            sign={currentSign}
        />
        </div>
      </div>
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
    <div className="container">
      <div className="row">
        <div className="col col-2-3">
          <div className="row">
            <div className="col">
              <input
                type="number"
                value={firstNumber}
                onChange={handleFirstNumberChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="number"
                value={secondNumber}
                onChange={handleSecondNumberChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="result">
                {result}
              </div>
            </div>
          </div>
        </div>
        <div className="col col-1-3">
          {signElements}
        </div>
      </div>
    </div>
  );

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