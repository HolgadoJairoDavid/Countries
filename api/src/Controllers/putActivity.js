const { Activity } = require("../db");
const updateActivity = require('../Helpers/updateActivity') 

const putActivity = async (req, res) => {

  const { idActivity } = req.params;
  const activityUpdates = req.body;
  try {
    await updateActivity(activityUpdates, idActivity)

    const result = await Activity.findByPk(idActivity);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = putActivity;
