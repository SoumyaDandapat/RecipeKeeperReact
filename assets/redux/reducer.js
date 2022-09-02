import { ADD_TO_FAVOURITES, GET_DATA, REMOVE_FROM_FAVOURITES } from "./actions";

const initialState = {
    recipes: [],
    favourites: []
};

const recipeReducer = (state = initialState,action) =>{
    switch(action.type){
        case GET_DATA:
            return { ...state, recipes: action.payload };
        case ADD_TO_FAVOURITES:
            return { ...state, favourites: [...state.favourites, action.payload] };
        case REMOVE_FROM_FAVOURITES:
            return {...state, favourites: state.favourites.filter(recipe => recipe.id !== action.payload.id)};
        default:
            return state;
    }
}

export default recipeReducer;