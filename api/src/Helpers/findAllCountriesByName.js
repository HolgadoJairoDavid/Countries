const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const findAllCountriesByName = async (name) => {
  const results = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: {
      model: Activity
    }
  });
  return results;
};

module.exports = findAllCountriesByName;