const { GET_ANIMES_AIRING, GET_MANGAS_AIRING, MORE } = require("./actions");
const initialState = {
  Animes_Airing: [],
  Mangas_Airing: [],
  Search: {},
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
    case MORE: {
      return {
        ...state,
        Search: action.payload,
      };
    }
    default:
      return state;
  }
};
export default rootReducer;
