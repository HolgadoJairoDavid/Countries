const { Activity } = require("../db");
const { Country } = require("../db");
const findAllActivities = require("../Helpers/findAllActivities");

const postActivity = async (req, res) => {
  const { name, difficulty, duration, season, countryName } = req.body;
  const image = req.file.path;

  try {
    if (!name || !difficulty || !duration || !season || !countryName || !image) {
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
          season,
          image
        },
      });

      if (activity) {
        const countryFound = await Country.findOne({
          where: {
            name: countryName,
          },
        });

        await activity.addCountry(countryFound); // addModel
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
