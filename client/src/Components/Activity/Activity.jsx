import { useDispatch } from "react-redux";
import { deleteActivity, getActivityById, getAllActivities, getCountryById } from "../../Redux/actions";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Activity = (props) => {

  const dispatch = useDispatch()
  const {pathname} = useLocation()
  const handleDelete = () => {
    dispatch(deleteActivity(props.id))
    dispatch(getAllActivities())
    if(pathname.includes('detail')){
      dispatch(getCountryById(props.countryId))
    }
  }

  useEffect(()=> {
    dispatch(getActivityById(props.id))
  })

  return (
    <div>
      <button onClick={handleDelete}>X</button>
      <button ><NavLink to={`/activities/${props.id}`}>Put</NavLink></button>
      <h1>{props.name}</h1>
      <p>{props.difficulty}</p>
      <p>{props.duration}</p>
      <div>{props.season && props.season.map((value, index) => <p key={index}>{value}</p>)}</div>
      <img
        src={props.image} 
        alt={props.name}
      />
    </div>
  );
};

export default Activity;
