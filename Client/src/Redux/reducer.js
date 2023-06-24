import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER, DELETEALL } from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_FAVORITE:
      
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
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
    case DELETEALL:
      return {
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    default:
      return { ...state };
  }
};
export default rootReducer;
