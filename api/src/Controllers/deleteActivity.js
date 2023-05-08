const { Activity } = require("../db");

const deleteActivity = async (req, res) => {
  const { idActivity } = req.params;
  console.log("Estoy acá");
  try {
    await Activity.destroy({
      where: {
        id: idActivity
      },
    });

    const results = await Activity.findAll();
    return res.status(200).json(results);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = deleteActivity;
