import { useSelector } from "react-redux";
import Country from "../Country/Country";

const SearchResults = (props) => {
  const countriesByName = useSelector((state) => state.countriesByName);
  return (
    <div>
      {countriesByName &&
        countriesByName.map((country) => {
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

export default SearchResults;
