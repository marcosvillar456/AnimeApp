var express = require("express");
var router = express.Router();
const { Search } = require("../controllers/AnimeController");
router.get("/search", Search);
module.exports = router;
