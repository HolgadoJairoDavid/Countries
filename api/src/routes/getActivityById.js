const { Router } = require("express");
const getActivityById = require("../Controllers/getActivityById");
const router = Router();

router.get("/activities/:id", getActivityById);

module.exports = router;