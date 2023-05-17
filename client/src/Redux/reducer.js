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
  FILTER_COUNTRIES_BY_SUBREGION,
  SEE_ALL,
  SET_TESTER,
  SET_SEE_ALL,
} from "./types";

// FOR DETAIL COMPONENT WE USE A LOCAL STATE
const initialStore = {
  seeAll: false,
  tester: true,
  filter: false,
  order: false,
  access: false,
  allCountries: [],
  filteredAndOrderedCountries: [],
  tenFilteredAndOrderedCountries: [],
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
        allCountries: payload,
        filteredAndOrderedCountries: payload,
        tenFilteredAndOrderedCountries: payload.slice(0, 10),
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
        access: payload,
      };
    // ORDER
    case ORDER_COUNTRIES:
      let orderCountries;
      if (payload === "AlphabeticallyA") {
        orderCountries = state.filteredAndOrderedCountries.sort((a, b) =>
          a.name > b.name ? 1 : -1
        );
      } else if (payload === "AlphabeticallyD") {
        orderCountries = state.filteredAndOrderedCountries.sort((a, b) =>
          a.name < b.name ? 1 : -1
        );
      } else if (payload === "PopulationA") {
        orderCountries = state.filteredAndOrderedCountries.sort((a, b) =>
          a.population > b.population ? 1 : -1
        );
      } else if (payload === "PopulationD") {
        orderCountries = state.filteredAndOrderedCountries.sort((a, b) =>
          a.population < b.population ? 1 : -1
        );
      } else if (payload === "AreaA") {
        orderCountries = state.filteredAndOrderedCountries.sort((a, b) =>
          a.area > b.area ? 1 : -1
        );
      } else if (payload === "AreaD") {
        orderCountries = state.filteredAndOrderedCountries.sort((a, b) =>
          a.area < b.area ? 1 : -1
        );
      }
      return {
        ...state,
        order: true,
        tester: true,
        filteredAndOrderedCountries: [...orderCountries],
        tenFilteredAndOrderedCountries: [...orderCountries].slice(0, 10),
      };

    // FILTER
    case FILTER_COUNTRIES_BY_CONTINENT:
      return {
        ...state,
        filter: true,
        tester: true,
        filteredAndOrderedCountries: state.allCountries.filter(
          (country) => country.continent === payload
        ),
        tenFilteredAndOrderedCountries: state.allCountries
          .filter((country) => country.continent === payload)
          .slice(0, 10),
      };

    case FILTER_COUNTRIES_BY_SUBREGION:
      return {
        ...state,
        filter: true,
        tester: true,
        filteredAndOrderedCountries: state.allCountries.filter(
          (country) => country.subregion === payload
        ),
        tenFilteredAndOrderedCountries: state.allCountries
          .filter((country) => country.subregion === payload)
          .slice(0, 10),
      };

    // SEE_ALL

    case SEE_ALL:
      return {
        ...state,
        seeAll: true,
        filter: false,
        order: false,
        tester: false,
        filteredAndOrderedCountries: [...state.allCountries],
      };

    case SET_TESTER:
      return {
        ...state,
        tester: false,
      };

    case SET_SEE_ALL:
      return {
        ...state,
        seeAll: false,
      };

    default:
      return state;
  }
};

export default reducer;
