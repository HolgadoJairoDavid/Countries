import { postActivity } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Dropzone from 'react-dropzone';
import style from "./createActivity.module.css";
import validate from "./validate";

const CreateActivity = (props) => {
  let allCountries = useSelector((state) => state.allCountries);
  const [state, setState] = React.useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryName: "",
  });
  const [image, setImage] = React.useState(null)
  const [error, setError] = React.useState({});

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
    setError(validate({ ...state, [event.target.name]: event.target.value }));
  };

  const handleDrop = (acceptedFiles) => {
    setImage(acceptedFiles[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!Object.keys(error).length) {
      dispatch(postActivity(state, image));
      setState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countryName: "",
        image: "",
      });
    }
  };

  return (
    <div className={style.Container}>
      <form onSubmit={handleSubmit} className={style.Form}>
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

        <label htmlFor="season">Season: </label>
        <select value={state.season} name="season" onChange={handleChange}>
          <option value="Summer">Summer</option>
          <option value="Autumn">Autumn</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
        </select>
        {error.season && <p>{error.season}</p>}

        <label htmlFor="countryName">Country: </label>
        <select
          value={state.countryName}
          name="countryName"
          onChange={handleChange}
        >
          {allCountries &&
            allCountries.map((country) => {
              return (
                <option key={country.id} value={country.name}>
                  {country.name}
                </option>
              );
            })}
        </select>
        {error.countryName && <p>{error.countryName}</p>}

        <Dropzone onDrop={handleDrop}>
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Arrastra una imagen aquí o haz clic para seleccionarla</p>
            </div>
          )}
        </Dropzone>

        {image && (
          <div>
            <p>Imagen cargada:</p>
            <img src={URL.createObjectURL(image)} alt="Imagen cargada" />
            {console.log(URL.createObjectURL(image))}
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateActivity;
