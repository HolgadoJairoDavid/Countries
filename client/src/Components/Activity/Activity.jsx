import { useDispatch } from "react-redux";
import { deleteActivity, getCountryById } from "../../Redux/actions";

const endpoint = 'http://localhost:3001/image/'

const Activity = (props) => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteActivity(props.id))
    dispatch(getCountryById(props.countryId))
  }
  const image = `${endpoint}${props.image}`

  return (
    <div>
      <button onClick={handleDelete}>X</button>
      <h1>{props.name}</h1>
      <p>{props.difficulty}</p>
      <p>{props.duration}</p>
      <p>{props.season}</p>
      <img
        src={image} 
        alt={props.name}
      />
    </div>
  );
};

export default Activity;
