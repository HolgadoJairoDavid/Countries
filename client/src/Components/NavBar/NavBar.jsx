import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import {
  getAllActivities,
  getAllCountries,
  posting,
} from "../../Redux/actions";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const allActivities = useSelector((state) => state.allActivities);
  const post = useSelector((state) => state.post);
  const handleClick = () => {
    props.logOut();
  };

  const handleActivities = () => {
    if (allActivities.length === 0) {
      dispatch(getAllActivities());
    }
  };

  const handleHome = () => {
    if (pathname === "/create" && post) {
      dispatch(getAllCountries());
      dispatch(posting(false));
    }
  };

  return (
    <div>
      <button onClick={handleHome}>
        <NavLink to="/home">Home</NavLink>
      </button>
      <button>
        <NavLink to="/create">Create Activity</NavLink>
      </button>
      <button>
        <NavLink to="/about">About</NavLink>
      </button>
      <button onClick={handleActivities}>
        <NavLink to="/activities">Activities</NavLink>
      </button>
      <button onClick={handleClick}>Log Out</button>
    </div>
  );
};

export default NavBar;
