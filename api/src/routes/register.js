const { Router } = require("express");
const register = require("../Controllers/User/register");
const router = Router();

router.post("/register", register);

module.exports = router;