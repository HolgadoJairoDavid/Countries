const { Op } = require("sequelize");
const path = require('path')
const { Activity } = require("../db");
const { Country } = require("../db");
const findAllActivities = require("../Helpers/findAllActivities");

const postActivity = async (req, res) => {
  const { name, difficulty, duration, season, countriesNames, image } = req.body;

  try {
    if (
      !name ||
      !difficulty ||
      !duration ||
      !season || !image || !countriesNames.length
    ) {
      throw Error("Faltan datos");
    } else {
      const [activity, boolean] = await Activity.findOrCreate({
        where: {
          name,
        },
        defaults: {
          name,
          difficulty,
          duration,
          season: season,
          image,
          countriesNames: countriesNames
        },
      });

      if (activity) {
        const countriesFound = await Country.findAll({
          where: {
            name: {
              [Op.in]: countriesNames,
            },
          },
        });
        await activity.addCountries(countriesFound); // addModel
      }

      const results = await findAllActivities();
      return boolean
        ? res.status(201).json(results)
        : res.status(400).json({ error: "Esa actividad ya existe" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = postActivity;
