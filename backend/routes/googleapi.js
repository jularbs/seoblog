const express = require("express");
const router = express.Router();

const { getTrending,getTopViews} = require("../controllers/googleapi.js");


router.get("/google/trending", getTrending);
router.get("/google/topviews", getTopViews);

module.exports = router;