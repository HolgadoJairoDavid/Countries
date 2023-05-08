const { Router } = require("express");
const getAllCountries = require("../Controllers/getAllCountries");

const router = Router();

router.get("/countries", getAllCountries);

module.exports = router;