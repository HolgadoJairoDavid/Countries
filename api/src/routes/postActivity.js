const { Router } = require("express");
const multer = require("multer");
const postActivity = require("../Controllers/postActivity");
const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
    // cb(null, "../client/src/assets/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.post("/activities", upload.single('image'), postActivity);

module.exports = router;
