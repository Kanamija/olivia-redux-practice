import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/slice"

export const store = configureStore({
    reducer: {
        counter: countReducer
    }
});




import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/slice"

export const store = configureStore({
    reducer: {
        counter: countReducer
    }
});
