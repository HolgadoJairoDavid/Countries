import { postActivity, getCountriesByName } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import style from "./createActivity.module.css";
import validate from "./validate";
import CountryCreateActivity from "../../Components/CountryCreateActivity/CountryCreateActivity";

const CreateActivity = (props) => {
  const countriesByName = useSelector((state) => state.countriesByName);
  const allCountries = useSelector((state) => state.allCountries);
  const [state, setState] = React.useState({
    name: "",
    difficulty: "",
    duration: "",
    season: [],
    image: "",
    countriesNames: [],
  });
  const [error, setError] = React.useState({});
  const [name, setName] = React.useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
    setError(validate({ ...state, [event.target.name]: event.target.value }));
  };

  const handleCountries = (event) => {
    setName(event.target.value);
    setError(validate({ ...state, [event.target.name]: event.target.value }));
    dispatch(getCountriesByName(name));
  };

  const handleClick = (event) => {
    event.preventDefault();
    setState({
      ...state,
      countriesNames: [...state.countriesNames, event.target.value],
    });
  };

  const handleRemove = (event) => {
    event.preventDefault();
    setState({
      ...state,
      countriesNames: state.countriesNames.filter(
        (countryName) => countryName !== event.target.value
      ),
    });
  };

  const countriesByActivity = allCountries.filter((country) =>
    state.countriesNames.includes(country.name)
  );

  const handleSeasons = (event) => {
    if(state.season.includes(event.target.value)){
      setState({...state, season: state.season.filter(value => value !== event.target.value)})
    } else {
      setState({...state, season: [...state.season, event.target.value]})
    }
    setError(validate({...state, season: [...state.season, event.target.value]}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!Object.keys(error).length) {
      dispatch(postActivity(state));
      setState({
        name: "",
        difficulty: "",
        duration: "",
        season: [],
        image: "",
        countriesNames: [],
      });
    }
  };

  return (
    <div className={style.Container}>
      <form className={style.Form}>
        <label htmlFor="name">Name: </label>
        <input
          value={state.name}
          type="text"
          name="name"
          onChange={handleChange}
        />
        {error.name && <p>{error.name}</p>}

        <label htmlFor="difficulty">Difficulty: </label>
        <select
          value={state.difficulty}
          name="difficulty"
          onChange={handleChange}
        >
          <option selected disabled>
            Select a difficulty
          </option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        {error.difficulty && <p>{error.difficulty}</p>}

        <label htmlFor="duration">Duration: </label>
        <input
          value={state.duration}
          type="number"
          name="duration"
          onChange={handleChange}
        />
        {error.duration && <p>{error.duration}</p>}

        <label >Season: </label>
        <div>
          <div>
            <input
              type="checkbox"
              name="season"
              value="Summer"
              onChange={handleSeasons}
            />
            <label >Summer</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="season"
              value="Autumn"
              onChange={handleSeasons}
            />
            <label>Autumn</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="season"
              value="Winter"
              onChange={handleSeasons}
            />
            <label>Winter</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="season"
              value="Spring"
              onChange={handleSeasons}
            />
            <label>Spring</label>
          </div>
        </div>
        {error.season && <p>{error.season}</p>}

        <label htmlFor="countriesNames">Country: </label>
        <input
          type="search"
          value={name}
          onChange={handleCountries}
          placeholder="Enter the name of a country"
        />
        {error.countriesNames && <p>{error.countriesNames}</p>}
        <div>
          {countriesByName &&
            countriesByName.slice(0, 15).map((country, index) => {
              return (
                <div key={`${index}SearchCountries`}>
                  <CountryCreateActivity
                    key={country.id}
                    id={country.id}
                    name={country.name}
                    image={country.image}
                  />
                  <button
                    key={`${index}add`}
                    value={country.name}
                    onClick={handleClick}
                  >
                    +
                  </button>
                </div>
              );
            })}
        </div>

        <div>
          {countriesByActivity &&
            countriesByActivity.map((country, index) => {
              return (
                <div key={`${index}CountriesByActivity`}>
                  <CountryCreateActivity
                    key={country.id}
                    id={country.id}
                    name={country.name}
                    image={country.image}
                  />
                  <button
                    key={index}
                    value={country.name}
                    onClick={handleRemove}
                  >
                    -
                  </button>
                </div>
              );
            })}
        </div>
        <label htmlFor="image">Image: </label>
        <input
          type="text"
          value={state.image}
          name="image"
          onChange={handleChange}
        />

        {state.image && (
          <div>
            <p>Imagen cargada: </p>
            <img src={state.image} alt="Imagen cargada" />
          </div>
        )}

        <button onClick={handleSubmit} disabled={!state.name}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateActivity;
