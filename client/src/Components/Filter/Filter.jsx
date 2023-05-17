import { useDispatch, useSelector } from "react-redux";
import { filterCountriesByContinent, filterCountriesBySubregion, seeAll } from "../../Redux/actions";

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
        props.seteador()
    }

    const handleSubregions = (event) => {
      dispatch(filterCountriesBySubregion(event.target.value))
      props.seteador()
    }

    // const handleReset = () => {
    //   dispatch(seeAll())
    //   props.seteador()
    //   props.seteador2()
    // }
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
      {/* <button onClick={handleReset}>Reset</button> */}
    </div>
  );
};

export default Filter;
