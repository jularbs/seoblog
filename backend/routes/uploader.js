const express = require("express");
const router = express.Router();
const {
  upload,
  remove
} = require("../controllers/uploader.js");
const {
  requireSignin,
  adminMiddleware,
  authMiddleware,
} = require("../controllers/auth.js");

router.post("/upload", requireSignin, adminMiddleware, upload);
router.post("/remove", requireSignin, adminMiddleware, remove);

module.exports = router;
