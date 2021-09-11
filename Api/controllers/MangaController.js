const axios = require("axios");

async function MangaAiring(req, res, next) {
  let Airing = [];
  const peticion = await axios.get(
    `https://api.jikan.moe/v3/top/manga?q=1&airing_status=progress`
  );
  const data = await peticion.data;
  data["top"].map((Manga) => {
    Airing.push({
      title: Manga.title,
      type: Manga.type,
      img: Manga.image_url,
      volumes: Manga.volumes,
    });
  });
  res.send(Airing);
}
module.exports = { MangaAiring };
