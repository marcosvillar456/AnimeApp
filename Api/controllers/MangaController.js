const axios = require("axios");

async function MangaAiring(req, res, next) {
  let Airing = [];
  const peticion = await axios.get(
    `https://api.jikan.moe/v3/top/manga?q=1&airing_status=progress`
  );
  const data = await peticion.data;
  data["top"].map((Manga) => {
    Airing.push({
      id: Manga.mal_id,

      title: Manga.title,
      type: Manga.type,
      img: Manga.image_url,
      volumes: Manga.volumes,
      source: "manga",
    });
  });
  res.send(Airing);
}
async function SearchManga(req, res, next) {
  try {
    const { source, id } = req.query;
    const peticion = await axios.get(
      `https://api.jikan.moe/v3/${source}/${id}`
    );
    console.log(source, id);
    const data = peticion.data;
    res.json({
      img: data.image_url,
      name: data.title,
      type: data.type,
      status: data.publishing === false ? "finished" : "Airing",
      rank: data.rank,
      sinopsis: data.synopsis,
      emitido: data.published.prop.from,
      finalizado: data.published.to,
      genres: data.genres.map((e) => {
        return e.name;
      }),
    });
  } catch (err) {
    console.log(next(err));
    return res.status(500).json(err);
  }
}
module.exports = { MangaAiring, SearchManga };
