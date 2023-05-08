const { Router } = require("express");
const deleteActivity = require("../Controllers/deleteActivity");
const router = Router();

router.delete("/activities/:idActivity", deleteActivity);

module.exports = router;