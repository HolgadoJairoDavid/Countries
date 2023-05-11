const Buttons = (props) => {
  return (
    <>
      <button onClick={props.prevHandler}>Prev</button>
      <h1>{props.currentPage} | 24</h1>
      <button onClick={props.nextHandler}>Next</button>
    </>
  );
};

export default Buttons;
