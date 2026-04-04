import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/slice"

export const store = configureStore({
    reducer: {
        counter: countReducer
    }
});

export const store = configureStore({
    reducer: {
        counter: countReducer
    }