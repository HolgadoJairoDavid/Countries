const axios = require("axios");
const { Country } = require("../db");
const findAllCountries = require("../Helpers/findAllCountries");

const getAllCountries = async (req, res) => {
  try {
    const count = await Country.count();
    if (count === 0) {
      const response = await axios.get("https://restcountries.com/v3/all");
      const countries = response.data;

      const countriesInstances = countries.map((country) => {
        return {
          id: country.cca3,
          name: country.name.official,
          image: country.flags[1],
          continent: country.region,
          capital: `${country.capital}`,
          subregion: `${country.subregion}`,
          area: country.area,
          population: country.population,
        };
      });

      await Country.bulkCreate(countriesInstances);

      const countryActivities = await findAllCountries();
      const results = countryActivities.map((country) => {
        return {
          ...country.toJSON(),
          activitiesData: country.activities ? country.activities.map((activity) => activity.toJSON()) : []
        };
      });

      return res.status(200).json(results);
    } else {
      const countryActivities = await findAllCountries();
      const results = countryActivities.map((country) => {
        return {
          ...country.toJSON(),
          activitiesData: country.activities ? country.activities.map((activity) => activity.toJSON()) : []
        };
      });

      return res.status(200).json(results);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAllCountries;
