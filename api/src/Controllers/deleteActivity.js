const { Activity } = require("../db");
const findAllActivities = require('../Helpers/findAllActivities')
const destroyActivity = require('../Helpers/destroyActivity');

const deleteActivity = async (req, res) => {
  const { idActivity } = req.params;
  
  try {
    await destroyActivity(idActivity)
    const results = await findAllActivities();

    return res.status(200).json(results);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = deleteActivity;
