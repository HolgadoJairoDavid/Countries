const { Country } = require("../db");
const findAllActivitiesInCountry_Activities = require('../Helpers/findAllActivitiesInCountry_Activities')

const getCountryById = async (req, res) => {
  try {
    const { idPais } = req.params;
    const country = await Country.findByPk(idPais);
    const activities = await findAllActivitiesInCountry_Activities(idPais)

    const activitiesData = activities.map((activity) => {
      return {
        name: activity.name,
        id: activity.id,
        difficulty: activity.difficulty,
        duration: activity.duration,
        season: activity.season,
        image: activity.image
      };
    });

    const results = { ...country.dataValues, activitiesData };
    return res.status(200).json(results);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = getCountryById;
