import { RECIPES } from "../data/mockdata";

export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const GET_DATA = "GET_DATA";

export const getData = () =>{
    return {
        type: GET_DATA,
        payload: RECIPES
    }
}