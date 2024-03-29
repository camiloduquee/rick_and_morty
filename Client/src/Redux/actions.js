import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER, ACCESS_KEY } from "./actions-types";
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
  
  const endpoint = "/rickandmorty/fav";
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
export const deleteFavorite = ({id, accesskey}) => {
  
  const endpoint = `/rickandmorty/fav/${id}/${accesskey}`;
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
export const accessKey = (id) => {
  return {
    type: ACCESS_KEY,
    payload: id,
  }
}

