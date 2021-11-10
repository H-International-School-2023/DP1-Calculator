import React from 'react';

const App = () => {

  const [firstNumber, setFirstNumber] = React.useState('');
  const [secondNumber, setSecondNumber] = React.useState('');
  const [result, setResult] = React.useState();

  const handleFirstNumberChange = (event) => {
    setFirstNumber(event.target.value);
  };

  const handleSecondNumberChange = (event) => {
    setSecondNumber(event.target.value);
  };

  const handlePlus = () => {
    const first = parseFloat(firstNumber);
    const second = parseFloat(secondNumber);
    const tmp = first + second;
    setResult(tmp);
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
        <button
          onClick={handlePlus}
        >
          +
        </button>
      </div>
      <div>
        {result}
      </div>
    </div>
  );
};

export default App;