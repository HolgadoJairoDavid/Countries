const { Router } = require("express");
const getCountryById = require("../Controllers/getCountryById.js");
const router = Router();

router.get("/countries/:idPais", getCountryById);

module.exports = router;
