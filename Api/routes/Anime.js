var express = require("express");
var router = express.Router();
const { AnimeAiring, SearchAnime } = require("../controllers/AnimeController");
router.get("/Airing", AnimeAiring);
router.get("/search", SearchAnime);

module.exports = router;
