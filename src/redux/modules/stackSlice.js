import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

const stackSlice = createSlice({
    name: 'stack',
    initialState,
    reducers: {
        addNumber(state, action){
            state.number = state.number + action.payload;
        },
        minusNumber(state, action){
            state.number -= action.payload;
        }
    },
});

export const {addNumber, minusNumber} = stackSlice.actions;