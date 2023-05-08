const {Country} = require('../db')

const findAllCountries = async () => {
    const results = await Country.findAll()
      return results
};

module.exports = findAllCountries