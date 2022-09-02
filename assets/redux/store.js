import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./reducer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['favourites']
};

const persistedReducer = persistReducer(persistConfig, recipeReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store)
