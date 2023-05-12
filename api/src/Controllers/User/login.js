const { User } = require("../../db");

const login = async (req, res) => {
  const { email, password } = req.query;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Missing data" });
    }

    const userFound = await User.findOne({
      where: {
        email,
      },
    });

    if (!userFound) {
      return res.status(404).send({ error: "You are not registered" });
    } else if (userFound.dataValues.password === password) {
      return res.status(200).json({ access: true });
    } else {
      return res.status(403).send({ error: "Incorrect password" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = login;
