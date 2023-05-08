const { Activity } = require("../db");

const putActivity = async (req, res) => {
    console.log('JEJE')

  const { idActivity } = req.params;
  const activityUpdates = req.body;
  try {
    await Activity.update(activityUpdates, {
      where: {
        id: idActivity,
      },
    });

    const result = await Activity.findByPk(idActivity);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = putActivity;
