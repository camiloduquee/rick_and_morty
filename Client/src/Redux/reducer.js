import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (favorite) => favorite.id !== action.payload
        ),
      };
    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (fil) => fil.gender === action.payload
        ),
      };
    case ORDER:
        const comparator = (a, b) =>
        action.payload === "Ascendiente" ? a.id - b.id : b.id - a.id;
      return {
        ...state,
        myFavorites: [...state.allCharacters].sort(comparator),
      };
    default:
      return { ...state };
  }
};
export default rootReducer;
