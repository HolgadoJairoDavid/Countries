import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <NavLink to='/login'>
        <button>Start</button>
      </NavLink>
    </div>
  );
};

export default Landing;