import { GET_DATA } from "./actions";

const initialState = {
    recipes: [],
    favourites: []
};

const recipeReducer = (state = initialState,action) =>{
    switch(action.type){
        case GET_DATA:
            return { ...state, recipes: action.payload };
        default:
            return state;
    }
}

export default recipeReducer;