import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { active: false, file: '' }
];

export const visualizadorSlice = createSlice({
    name: 'visulizador',
    initialState,
    reducers: {
        changeVisualizador: (state, action) => {
            return [{ active: true, file: action.payload }];
        },
        removeVisualizador: () => {
            return [{ active: false, file: '' }];
        }
    }
});

export const { changeVisualizador, removeVisualizador } = visualizadorSlice.actions;

export default visualizadorSlice.reducer;