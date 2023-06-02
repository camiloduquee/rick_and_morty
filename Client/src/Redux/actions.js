import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actions-types";

export const addFavorite = (character) => async (dispatch) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  try {
    return await axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteFavorite = (id) => {
  return {
    type: DELETE_FAVORITE,
    payload: id,
  };
};
export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};
export const orderCards = (status) => {
  return {
    type: ORDER,
    payload: status,
  };
};
