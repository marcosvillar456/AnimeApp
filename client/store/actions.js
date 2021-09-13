import axios from "axios";
export const GET_ANIMES_AIRING = "GET_ANIMES_AIRING";
export const GET_MANGAS_AIRING = "GET_MANGAS_AIRING";
export const MORE = "MORE";
export function getAnimesAiring() {
  return async function (dispatch) {
    const Animes = await axios.get(
      "https://anime-back.herokuapp.com/anime/Airing"
    );

    const json = await Animes.data;
    return dispatch({
      type: GET_ANIMES_AIRING,
      payload: json,
    });
  };
}

export function getMangasAiring() {
  return async function (dispatch) {
    const Animes = await axios.get(
      "https://anime-back.herokuapp.com/mangas/Airing"
    );
    const json = await Animes.data;
    return dispatch({
      type: GET_MANGAS_AIRING,
      payload: json,
    });
  };
}

export function getMoreInfo(source, id) {
  return async function (dispatch) {
    const peticion = await axios.get(
      `https://anime-back.herokuapp.com/search?source=${source}&id=${id}`
    );
    const json = await peticion.data;
    return dispatch({
      type: MORE,
      payload: json,
    });
  };
}
