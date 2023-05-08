const { Router } = require("express");
const getAllActivities = require("../Controllers/getAllActivities");
const router = Router();

router.get("/activities", getAllActivities);

module.exports = router;