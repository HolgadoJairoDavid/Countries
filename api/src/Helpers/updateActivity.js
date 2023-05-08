const { Activity } = require("../db");

const updateActivity = async (activityUpdates, idActivity) => {
    await Activity.update(activityUpdates, {
        where: {
          id: idActivity,
        },
      });
};

module.exports = updateActivity;
