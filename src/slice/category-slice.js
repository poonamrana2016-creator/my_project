import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//  Thunk API 
export const getAllCategory = createAsyncThunk('category/getAllCategory', async (_, thunkApi) => {
    try {
        const data = await axios.get('https://api.escuelajs.co/api/v1/categories');
        if (data) {
            return thunkApi.fulfillWithValue(data.data);
        }
    } catch (error) {
        return thunkApi.rejectWithValue("error:", error);
    }
});



// Store API
const categorySlice = createSlice({
    name: 'category',
    initialState: {
        loading: false,
        items: [],
        error: null,
        message: null,
        status: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
                state.status = action.payload.status || 200;
            })
            .addCase(getAllCategory.rejected, (state, action) => {
                state.loading = false;
                state.status = action.payload.status || 404;
                state.message = action.payload.message || "Something went wrong.";
            })
    }
});



export default categorySlice.reducer;
