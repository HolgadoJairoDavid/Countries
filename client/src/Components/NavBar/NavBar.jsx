import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const handleClick = () => {
    props.logOut();
  };

  return (
    <div>
      <button>
        <NavLink to="/home">Home</NavLink>
      </button>
      <button>
        <NavLink to="/create">Create Activity</NavLink>
      </button>
      <button>
        <NavLink to="/about">About</NavLink>
      </button>
      <button onClick={handleClick}>Log Out</button>
    </div>
  );
};

export default NavBar;
