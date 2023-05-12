const { User } = require("../../db");

const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(401).json({ error: "Missing data" });
    }

    const [userCreated, boolean] = await User.findOrCreate({
      where: {
        email,
      },
      defaults: {
        email,
        password,
      },
    });

    return boolean
      ? res.status(201).json({ result: "Successful registration" })
      : res.status(400).json({ result: "That user already exists" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = register;
