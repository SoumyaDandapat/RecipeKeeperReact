import {  RECIPES, RECIPES_JSON } from "../data/mockdata";

export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const GET_DATA = "GET_DATA";

export const getData = () =>{
    return {
        type: GET_DATA,
        payload: RECIPES_JSON
    }
}

export const addFavourite = recipe => dispatch => {
    dispatch({
      type: ADD_TO_FAVOURITES,
      payload: recipe
    });
  };
  
  export const removeFavourite = recipe => dispatch => {
    dispatch({
      type: REMOVE_FROM_FAVOURITES,
      payload: recipe
    });
  };