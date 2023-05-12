const { Router } = require("express");
const login = require("../Controllers/User/login");
const router = Router();

router.get("/login", login);

module.exports = router;