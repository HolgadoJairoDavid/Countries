const { Router } = require("express");
const postActivity = require("../Controllers/postActivity");
const router = Router();

router.post("/activities", postActivity);

module.exports = router;
