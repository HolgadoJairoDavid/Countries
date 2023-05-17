const Buttons = (props) => {
  const total = Math.ceil(props.allCountries.length / 10) - 1;
  return (
    <>
      <button onClick={props.prevHandler}>Prev</button>
      <h1>{props.currentPage} | {total}</h1>
      <button onClick={props.nextHandler}>Next</button>
    </>
  );
};

export default Buttons;
