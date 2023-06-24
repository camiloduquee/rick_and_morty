import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER, DELETEALL, ACCESS_KEY } from "./actions-types";
import axios from "axios";

export const addFavorite = (character) => async (dispatch) => {
  const char = {
    UserId: character.accesskey,
    id: character.id,
    name: character.name,
    status: character.status,
    gender: character.gender,
    origin: character.origin,
    image: character.image,
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
    alert(error.response.data);
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
export const deleteAll = () => {
  const endpoint = `http://localhost:3001/rickandmorty/fav`;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: "DELETEALL",
        payload: data,
      });
    });
  };
}
export const accessKey = (id) => {
  return {
    type: "ACCESS_KEY",
    payload: id,
  }
}
