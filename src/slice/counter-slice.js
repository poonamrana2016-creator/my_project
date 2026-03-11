import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        handleIncreament: (state) => {
            state.value += 1;
        },
        handleDecreament: (state) => {
            state.value -= 1;
        }
    }
});

export const { handleIncreament, handleDecreament } = counterSlice.actions;
export default counterSlice.reducer;