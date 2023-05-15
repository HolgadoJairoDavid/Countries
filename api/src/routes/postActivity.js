const { Router } = require("express");
const multer = require("multer");
const postActivity = require("../Controllers/postActivity");
const router = Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${file.originalname}-${Date.now()}`);
//   },
// });

// const upload = multer({ storage: storage });

router.post("/activities", postActivity);

module.exports = router;
