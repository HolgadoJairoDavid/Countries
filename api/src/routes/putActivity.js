const { Router } = require("express");
const putActivity = require("../Controllers/putActivity");
const router = Router();

router.put("/activities/:idActivity", putActivity);

module.exports = router;