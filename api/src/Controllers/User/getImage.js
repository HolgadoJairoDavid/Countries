const fs = require("fs");

const getImage = (req, res) => {
  const { imageName } = req.params;
  const readStream = fs.createReadStream(`public/${imageName}`);
  readStream.pipe(res);
};

module.exports = getImage