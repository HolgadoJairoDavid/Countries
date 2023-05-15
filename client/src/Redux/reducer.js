import {
  GETALLCOUNTRIES,
  GETCOUNTRYBYID,
  GETALLCOUNTRIESBYNAME,
  GETALLACTIVITIES,
  DELETEACTIVITY,
  POSTACTIVITY,
  PUTACTIVITY,
  SET_ACCESS,
  ORDER_COUNTRIES,
  FILTER_COUNTRIES_BY_CONTINENT,
  FILTER_COUNTRIES_BY_SUBREGION
  // here add POSTIMAGE
} from "./types";

// FOR DETAIL COMPONENT WE USE A LOCAL STATE
const initialStore = {
  access: false,
  allCountries: [],
  allActivities: [],
  countriesByName: [],
  countryById: {},
  putActivity: {},
};

const reducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case GETALLCOUNTRIES:
      return {
        ...state,
        allCountries: payload

      };
    case GETCOUNTRYBYID:
      return {
        ...state,
        countryById: payload,
      };
    case GETALLCOUNTRIESBYNAME:
      return {
        ...state,
        countriesByName: payload,
      };
    case GETALLACTIVITIES:
      return {
        ...state,
        allActivities: payload,
      };
    case DELETEACTIVITY:
      return {
        ...state,
        allCountries: payload,
      };
    case POSTACTIVITY:
      return {
        ...state,
        allActivities: payload,
      };
    case PUTACTIVITY:
      return {
        ...state,
        putActivity: payload,
      };
    case SET_ACCESS: 
    return {
      ...state,
      access: payload
    }
// ORDER (SORT)
    case ORDER_COUNTRIES:
      let orderCountries;
      if(payload === "AlphabeticallyA"){
        orderCountries = state.allCountries.sort((a, b) => (a.name > b.name ? 1 : -1))
      } else if (payload === "AlphabeticallyD"){
        orderCountries = state.allCountries.sort((a, b) => (a.name < b.name ? 1 : -1))
      } else if(payload === "PopulationA") {
        orderCountries = state.allCountries.sort((a, b) => (a.population > b.population ? 1 : -1))
      } else if(payload === "PopulationD") {
        orderCountries = state.allCountries.sort((a, b) => (a.population < b.population ? 1 : -1))
      } else if (payload === "AreaA") {
        orderCountries = state.allCountries.sort((a, b) => (a.area > b.area ? 1 : -1))
      } else if(payload === "AreaD") {
        orderCountries = state.allCountries.sort((a, b) => (a.area < b.area ? 1 : -1))
      }
    return {
      ...state,
      allCountries: [...orderCountries]
    }


    case FILTER_COUNTRIES_BY_CONTINENT: 
    return {
      ...state,
      allCountries: state.allCountries.filter(country => country.continent === payload)
    }

    case FILTER_COUNTRIES_BY_SUBREGION: 
    return {
      ...state,
      allCountries: state.allCountries.filter(country => country.subregion=== payload)
    }

    default:
      return state;
  }
};

export default reducer;
