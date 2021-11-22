const OperationButton = (props) => {
  const sign = props.sign;
  const onOperation = props.onOperation;

  const handleClick = () => {
    onOperation(sign);
  }
  return (
    <button
      className="btn-block"
      onClick={handleClick}
    >
      {sign}
    </button>
  );
};

export default OperationButton;
