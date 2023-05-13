import {ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER} from './actions-types';

export const addFavorite = (id) => async (dispatch) => {
     try {
      return await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: ADD_FAVORITE,
            payload: data,
          });
        });
    } catch (error) {
      console.log(error);
    }
  }; 
export const deleteFavorite = (id) =>{
    return {
        type: DELETE_FAVORITE,
        payload:id,
    }
}
export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  }
}
export const orderCards = (status) => {
  return {
    type: ORDER,
    payload: status,
  }
}