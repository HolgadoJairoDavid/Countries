import Country from "../Country/Country";
import style from "./countries.module.css";

const Countries = (props) => {
  return (
    <div className={style.Container}>
      {props.allCountries &&
        props.allCountries.map((country) => {
          return (
            <Country
              key={country.id}
              id={country.id}
              name={country.name}
              image={country.image}
            />
          );
        })}
    </div>
  );
};

export default Countries;
