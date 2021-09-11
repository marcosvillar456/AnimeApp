var express = require("express");
var router = express.Router();
const Anime = require("./Anime");
const Manga = require("./Manga");

/* GET home page. */
router.use("/anime", Anime);
router.use("/mangas", Manga);

module.exports = router;
