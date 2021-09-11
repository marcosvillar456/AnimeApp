var express = require("express");
var router = express.Router();
const Anime = require("./Anime");
const Manga = require("./Manga");
const search = require("./Search");
/* GET home page. */
router.use("/anime", Anime);
router.use("/mangas", Manga);
router.use("/", search);

module.exports = router;
