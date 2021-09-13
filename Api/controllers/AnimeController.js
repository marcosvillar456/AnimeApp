const axios = require("axios");

function ordenar(array, fecha) {
  const posicion = array.indexOf(fecha);
  const restos = [...array].slice(posicion - 1, array.length);
  array.map((item) => {
    if (restos.includes(item) === false) {
      restos.push(item);
    }
  });
  return restos;
}

async function Search(req, res, next) {
  try {
    const { source, id } = req.query;

    if (source === "anime") {
      const peticion = await axios.get(
        `https://api.jikan.moe/v3/${source}/${id}`
      );
      const data = peticion.data;
      res.json({
        trailer: data.trailer_url,
        img: data.image_url,
        name: data.title,
        type: data.type,
        status: data.status,
        rank: data.rank,
        sinopsis: data.synopsis,
        emitido: data.aired.prop.from,
        finalizado: data.aired.to,
        openings: data.opening_themes,
        endings: data.ending_themes,
        duracion: data.duration,
        genres: data.genres.map((e) => {
          return e.name;
        }),
      });
    } else {
      const peticion = await axios.get(
        `https://api.jikan.moe/v3/${source}?q=${id}`
      );
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
        l,
      });
    }
  } catch (err) {
    console.log(next(err));
    return res.status(500).json(err);
  }
}

async function AnimeAiring(req, res, next) {
  const dias = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const fecha = new Date().getDay();
  const diasOrdenado = await ordenar(dias, dias[fecha]);
  try {
    let Airing = [];
    const peticion = await axios.get(`https://api.jikan.moe/v3/schedule`);
    const data = peticion.data;
    diasOrdenado.map((dia) => {
      data[dia].map((Anime) => {
        Airing.push({
          id: Anime.mal_id,
          title: Anime.title,
          type: Anime.type,
          img: Anime.image_url,
          episodes: Anime.episodes,
          source: "anime",
        });
      });
    });
    res.send(Airing);
  } catch (err) {
    console.log(next(err));
    return res.status(500).json(err);
  }
}
module.exports = { AnimeAiring, Search };
