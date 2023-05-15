import {
  GETALLCOUNTRIES,
  GETCOUNTRYBYID,
  GETALLCOUNTRIESBYNAME,
  GETALLACTIVITIES,
  DELETEACTIVITY,
  POSTACTIVITY,
  PUTACTIVITY,
  SET_ACCESS,
  FILTER_COUNTRIES_BY_CONTINENT,
  ORDER_COUNTRIES,
  FILTER_COUNTRIES_BY_SUBREGION,
  // here add POSTIMAGE
} from "./types";
import axios from "axios";

const endpointCountries = "http://localhost:3001/countries";
const endpointActivities = "http://localhost:3001/activities";

export const getAllCountries = () => {
  return (dispatch) => {
    try {
      return fetch(endpointCountries)
        .then((response) => response.json())
        .then((data) => dispatch({ type: GETALLCOUNTRIES, payload: data }));
    } catch (error) {
      console.log(`%cerror: ${error.message}`, `color:red;font-weight:bold`);
    }
  };
};

export const getCountryById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${endpointCountries}/${id}`);
      return dispatch({
        type: GETCOUNTRYBYID,
        payload: data,
      });
    } catch (error) {
      console.log(`%cerror: ${error.message}`, `color:red;font-weight:bold`);
    }
  };
};

export const getCountriesByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${endpointCountries}/name?name=${name}`
      );
      return dispatch({
        type: GETALLCOUNTRIESBYNAME,
        payload: data,
      });
    } catch (error) {
      console.log(`%cerror: ${error.message}`, `color:red;font-weight:bold`);
    }
  };
};

export const getAllActivities = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpointActivities);
      return dispatch({
        type: GETALLACTIVITIES,
        payload: data,
      });
    } catch (error) {
      console.log(`%cerror: ${error.message}`, `color:red;font-weight:bold`);
    }
  };
};

export const deleteActivity = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${endpointActivities}/${id}`);
      return dispatch({
        type: DELETEACTIVITY,
        payload: data,
      });
    } catch (error) {
      console.log(`%cerror: ${error.message}`, `color:red;font-weight:bold`);
    }
  };
};

export const postActivity = (activity) => {
  return async (dispatch) => {
    try {
      // const formData = new FormData();
      // formData.append("name", name);
      // formData.append("image", image);
      // formData.append("difficulty", difficulty);
      // formData.append("duration", duration);
      // formData.append("season", season);
      // formData.append("countryName", countryName);
      const { data } = await axios.post(endpointActivities, activity);
      return dispatch({
        type: POSTACTIVITY,
        payload: data,
      });
    } catch (error) {
      console.log(`%cerror: ${error.message}`, `color:red;font-weight:bold`);
    }
  };
};

export const putActivity = (id, activityUpdates) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(
        `${endpointActivities}/${id}`,
        activityUpdates
      );
      return dispatch({
        type: PUTACTIVITY,
        payload: data,
      });
    } catch (error) {
      console.log(`%cerror: ${error.message}`, `color:red;font-weight:bold`);
    }
  };
};

export const setAccess = (payload) => {
  return {
    type: SET_ACCESS,
    payload,
  };
};

export const filterCountriesByContinent = (payload) => {
  return {
    type: FILTER_COUNTRIES_BY_CONTINENT,
    payload,
  };
};

export const filterCountriesBySubregion = (payload) => {
  return {
    type: FILTER_COUNTRIES_BY_SUBREGION,
    payload,
  };
};

export const orderCountries = (payload) => {
  return {
    type: ORDER_COUNTRIES,
    payload,
  };
};
