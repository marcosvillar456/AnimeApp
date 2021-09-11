import axios from "axios";
export const GET_ANIMES_AIRING = "GET_ANIMES_AIRING";
export const GET_MANGAS_AIRING = "GET_MANGAS_AIRING";

export function getAnimesAiring() {
  return async function (dispatch) {
    const Animes = await axios.get("http://localhost:3010/anime/Airing");

    const json = await Animes.data;
    return dispatch({
      type: GET_ANIMES_AIRING,
      payload: json,
    });
  };
}

export function getMangasAiring() {
  return async function (dispatch) {
    const Animes = await axios.get("http://localhost:3010/mangas/Airing");
    const json = await Animes.data;
    return dispatch({
      type: GET_MANGAS_AIRING,
      payload: json,
    });
  };
}
