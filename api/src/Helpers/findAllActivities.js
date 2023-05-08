const {Activity} = require('../db')

const findAllActivities = async () => {
    const results = await Activity.findAll()
    return results
};

module.exports = findAllActivities