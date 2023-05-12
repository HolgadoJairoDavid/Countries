import {
  GETALLCOUNTRIES,
  GETCOUNTRYBYID,
  GETALLCOUNTRIESBYNAME,
  GETALLACTIVITIES,
  DELETEACTIVITY,
  POSTACTIVITY,
  PUTACTIVITY,
  SET_ACCESS
  // here add POSTIMAGE
} from "./types";

// FOR DETAIL COMPONENT WE USE A LOCAL STATE
const initialStore = {
  access: false,
  allCountries: [],
  filteredCountries: [],
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

    // case ORDER:
    //     return {
    //         ...state,
    //         allCountries: [...payload]
    //     }

    default:
      return state;
  }
};

export default reducer;
