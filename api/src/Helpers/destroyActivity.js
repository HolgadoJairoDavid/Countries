const {Activity} = require('../db')

const destroyActivity = async (idActivity) => {
    await Activity.destroy({
        where: {
          id: idActivity
        },
      });
};

module.exports = destroyActivity