const {Activity} = require('../db')
const {Country} = require('../db')

const findAllActivitiesInCountry_Activities = async (idPais) => {
    const results = await Activity.findAll({
        include: [
          {
            model: Country,
            where: { id: idPais },
          },
        ],
      })
    return results;
};

module.exports = findAllActivitiesInCountry_Activities