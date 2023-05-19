import { useDispatch } from "react-redux";
import { deleteActivity, getActivityById, getCountryById } from "../../Redux/actions";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Activity = (props) => {

  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteActivity(props.id))
    dispatch(getCountryById(props.countryId))
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
