import { useSelector } from "react-redux";
import Country from "../Country/Country";
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import { cleanSearchResults } from "../../Redux/actions";

const SearchResults = (props) => {
  const dispatch = useDispatch()
  const countriesByName = useSelector((state) => state.countriesByName);
  useEffect(()=>{
    return ()=> {
      dispatch(cleanSearchResults())
    }
  }, [dispatch])
  if(!countriesByName.length){
    return <div>There are no countries with that name</div>
  }
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
