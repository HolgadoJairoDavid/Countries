import { useDispatch, useSelector } from "react-redux";
import { filterCountriesByContinent, filterCountriesBySubregion } from "../../Redux/actions";

const Filter = (props) => {
    const dispatch = useDispatch()
  const allCountries = useSelector((state) => state.allCountries);
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

    const handleContinents = (event) => {
        dispatch(filterCountriesByContinent(event.target.value))
        props.nextHandler()
        props.prevHandler()
    }

    const handleSubregions = (event) => {
      dispatch(filterCountriesBySubregion(event.target.value))
        props.nextHandler()
        props.prevHandler()
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
    </div>
  );
};

export default Filter;
