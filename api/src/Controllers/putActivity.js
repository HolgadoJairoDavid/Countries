const { Activity, Country } = require("../db");
const { Op } = require("sequelize");
const updateActivity = require("../Helpers/updateActivity");

const putActivity = async (req, res) => {
  const { idActivity } = req.params;
  const {name, difficulty, duration, season, image, countriesNames} = req.body
  const activityUpdates = {name, difficulty, duration, season, image, countriesNames};
  const { countriesNamesUpdate } = req.body;
  const { countriesRemove } = req.body;
  try {
    await updateActivity(activityUpdates, idActivity);
    
    const result = await Activity.findByPk(idActivity);
    
    if (result) {
      const countriesFound = await Country.findAll({
        where: {
          name: {
            [Op.in]: countriesNamesUpdate,
          },
        },
      });

      const countriesFoundToRemove = await Country.findAll({
        where: {
          name: {
            [Op.in]: countriesRemove,
          },
        },
      })
      await result.removeCountries(countriesFoundToRemove)
      await result.addCountries(countriesFound); 
    }
    return res.status(201).json(result);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = putActivity;
