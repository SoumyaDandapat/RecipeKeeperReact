import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./reducer";

const store = configureStore({reducer:recipeReducer})

export default store;