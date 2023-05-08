const { Router } = require("express");
const getAllCountriesByName = require("../Controllers/getAllCountriesByName");
const router = Router();

router.get("/countries/name", getAllCountriesByName);

module.exports = router;
