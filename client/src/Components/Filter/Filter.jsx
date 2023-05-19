import { useDispatch, useSelector } from "react-redux";
import { filterCountriesByActivities, filterCountriesByContinent, filterCountriesBySubregion } from "../../Redux/actions";

const Filter = (props) => {
    const dispatch = useDispatch()
  const allCountries = useSelector((state) => state.allCountries);
  const allActivities = useSelector(state => state.allActivities)

  const continents = [];
  allCountries.map((country) => {
    if (!continents.includes(country.continent)) {
      continents.push(country.continent);
    }
  });

  const subregions = [];
  allCountries.map((country) => {
    if (!subregions.includes(country.subregion)) {
      subregions.push(country.subregion);
    }
  });

  const activities = [];
  if (Array.isArray(allActivities)) {
    allActivities.map((activity) => {
      if (!subregions.includes(activity.name)) {
        activities.push(activity.name);
      }
    });
  }

    const handleContinents = (event) => {
        dispatch(filterCountriesByContinent(event.target.value))
        props.seteador()
    }

    const handleSubregions = (event) => {
      dispatch(filterCountriesBySubregion(event.target.value))
      props.seteador()
    }

    const handleActivities = (event) => {
      dispatch(filterCountriesByActivities(event.target.value))
      props.seteador()
    }
  return ( 
    <div>
      <select onChange={handleContinents}>
      <option selected disabled>
          Select a continent
        </option>
        {continents.map((continent, index) => (
          <option key={index} value={continent}>{continent}</option>
        ))}
      </select>

      <select onChange={handleSubregions}>
        <option selected disabled>
          Select a subregion
        </option>
        {subregions.map((subregion, index) => (
          <option key={index} value={subregion}>{subregion}</option>
        ))}
      </select>

      <select onChange={handleActivities}>
        <option selected disabled>
          Select a activity
        </option>
        {activities.map((activity, index) => (
          <option key={index} value={activity}>{activity}</option>
        ))}
      </select>

    </div>
  );
};

export default Filter;
