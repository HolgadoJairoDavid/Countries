const {Activity} = require("../db");
const {Country} = require("../db")

const postActivity = async (req, res) => {
  const { name, difficulty, duration, season, countryName } = req.body;
  try {
    if (!name || !difficulty || !duration || !season || !countryName) {
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
        },
      });

      if(activity){
        const countryFound = await Country.findOne({where :{
            name: countryName
        }})

        await activity.addCountry(countryFound)
      }


      const results = await Activity.findAll()
      return boolean
        ? res.status(201).json(results)
        : res.status(400).json({ message: "Esa actividad ya existe" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = postActivity;
