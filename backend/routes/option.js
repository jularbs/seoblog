const express = require("express");
const router = express.Router();
const { create, list, read, remove, update } = require("../controllers/option.js");
const {
  requireSignin,
  adminMiddleware,
  authMiddleware,
} = require("../controllers/auth.js");


router.post("/option", requireSignin, adminMiddleware, create);
router.get("/options", list);
router.get("/option/:key", read);
router.delete("/option/:key", requireSignin, adminMiddleware, remove);
router.put("/option", requireSignin, adminMiddleware, update);

module.exports = router;
