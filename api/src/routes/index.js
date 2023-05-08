const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllCountries = require("../Controllers/getAllCountries");
const getCountryById = require("../Controllers/getCountryById.js");
const getAllCountriesByName = require("../Controllers/getAllCountriesByName");
const postActivity = require("../Controllers/postActivity");
const getAllActivities = require("../Controllers/getAllActivities");
const deleteActivity = require("../Controllers/deleteActivity");
const putActivity = require("../Controllers/putActivity");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/countries/name", getAllCountriesByName);

router.get("/countries/:idPais", getCountryById);

router.get("/countries", getAllCountries);

router.delete("/activities/:idActivity", deleteActivity);

router.post("/activities", postActivity);

router.get("/activities", getAllActivities);

router.put("/activities/:idActivity", putActivity);

module.exports = router;
