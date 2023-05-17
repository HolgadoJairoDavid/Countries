const { Router } = require("express");
const getImage = require("../Controllers/User/getImage");
const router = Router();

router.get("/image/:imageName", getImage);

module.exports = router;