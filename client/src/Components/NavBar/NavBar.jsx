import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllActivities } from "../../Redux/actions";

const NavBar = (props) => {
  const dispatch = useDispatch()
  const allActivities = useSelector(state => state.allActivities)
  const handleClick = () => {
    props.logOut();
  };

const handleActivities= () => {
  if(allActivities.length === 0){
    dispatch(getAllActivities())
  }
}

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
      <button onClick={handleActivities}><NavLink to="/activities">Activities</NavLink></button>
      <button onClick={handleClick}>Log Out</button>
    </div>
  );
};

export default NavBar;
