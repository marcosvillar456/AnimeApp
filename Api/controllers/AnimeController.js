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
          title: Anime.title,
          type: Anime.type,
          img: Anime.image_url,
          episodes: Anime.episodes,
        });
      });
    });
    res.send(Airing);
  } catch (err) {
    console.log(next(err));
    return res.status(500).json(err);
  }
}
module.exports = { AnimeAiring };
