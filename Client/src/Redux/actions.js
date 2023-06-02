import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actions-types";
import axios from "axios";

export const addFavorite = (character) => async (dispatch) => {
  const char = {
    key: character.id,
    name: character.name,
    species: character.species,
    gender: character.gender,
    image: character.image,
    id: character.id,
  };

  const endpoint = "http://localhost:3001/rickandmorty/fav";
  try {
    return await axios.post(endpoint, char).then(({ data }) => {
        return dispatch({
        type: "ADD_FAVORITE",
        payload: data,
      });
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteFavorite = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
        return dispatch({
        type: "DELETE_FAVORITE",
        payload: data,
      });
    });
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
