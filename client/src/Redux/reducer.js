import {
  GETALLCOUNTRIES,
  GETCOUNTRYBYID,
  GETALLCOUNTRIESBYNAME,
  GETALLACTIVITIES,
  DELETEACTIVITY,
  POSTACTIVITY,
  PUTACTIVITY,
  // here add POSTIMAGE
} from "./types";

// FOR DETAIL COMPONENT WE USE A LOCAL STATE
const initialStore = {
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
