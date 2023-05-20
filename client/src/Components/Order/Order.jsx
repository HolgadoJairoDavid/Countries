import { useDispatch } from "react-redux";
import { orderCountries } from "../../Redux/actions";

const Order = (props) => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(orderCountries(event.target.value));
  };
  return (
    <div>
      <select onChange={handleChange} defaultValue=''>
      <option value='' disabled>
        Order By Name
        </option>
        
        <option value="AlphabeticallyA">A - Z</option>
        <option value="AlphabeticallyD">Z - A</option>
      </select>

      <select onChange={handleChange} defaultValue=''>
      <option value='' disabled>
        Order By Population
        </option>
        <option value="PopulationA">Lesser to Greater</option>
        <option value="PopulationD">Greater to Lesser</option>
      </select>

      <select onChange={handleChange} defaultValue=''>
      <option value='' disabled>
        Order By Area
        </option> 
        <option value="AreaA">Lesser to Greater</option>
        <option value="AreaD">Greater to Lesser</option>
      </select>
    </div>
  );
};

export default Order;
