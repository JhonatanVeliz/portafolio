import { configureStore } from "@reduxjs/toolkit";
import visualizadorReducer from "../feature/visualizador/visualizadorSlice.js";

export const store = configureStore({
    reducer: {
        visualizador : visualizadorReducer
    }
})