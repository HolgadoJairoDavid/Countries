const { Country } = require("../db");
const { Op } = require("sequelize");

const findAllCountriesByName = async (name) => {
  const results = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  return results;
};

module.exports = findAllCountriesByName;