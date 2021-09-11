const { GET_ANIMES_AIRING, GET_MANGAS_AIRING } = require("./actions");
const initialState = {
  Animes_Airing: [],
  Mangas_Airing: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANIMES_AIRING: {
      return {
        ...state,
        Animes_Airing: action.payload,
      };
    }
    case GET_MANGAS_AIRING: {
      return {
        ...state,
        Mangas_Airing: action.payload,
      };
    }
    default:
      return state;
  }
};
export default rootReducer;
