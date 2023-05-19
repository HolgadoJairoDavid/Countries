const {Country, Activity} = require('../db')

const findAllCountries = async () => {
    const results = await Country.findAll({include: { model: Activity },})
      return results
};

module.exports = findAllCountries