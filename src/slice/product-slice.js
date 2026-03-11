import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//  Thunk API Calling..
export const getAllProduct = createAsyncThunk('product/getAllProduct', async (id, thunkApi) => {
    try {
        const data = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
        if (data) {
            return thunkApi.fulfillWithValue(data.data);
        }
    } catch (error) {
        return thunkApi.rejectWithValue("error:", error);
    }
});


export const deletedProduct = createAsyncThunk('product/deleteProduct', async (id, thunkApi) => {
    try {
        const data = await axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`);
        console.log(data);

        if (data) {
            return thunkApi.fulfillWithValue("Product Deleted Successfull.");
        }
    } catch (error) {
        return thunkApi.rejectWithValue("error", error);
    }
});



// Store for product
const productSlice = createSlice({
    name: 'Product',
    initialState: {
        laoding: false,
        items: [],
        error: null,
        message: null,
        status: null,
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProduct.pending, (state) => {
                state.laoding = true;
            })
            .addCase(getAllProduct.fulfilled, (state, action) => {
                state.laoding = false;
                state.items = action.payload;
                state.status = action.payload.status || 200;
            })
            .addCase(getAllProduct.rejected, (state, action) => {
                state.laoding = false;
                state.status = action.payload.status || 404;
                state.message = action.payload.message || 'Something went wrong.';
            })
            .addCase(deletedProduct.pending, (state) => {
                state.laoding = true;
            })
            .addCase(deletedProduct.fulfilled, (state, action) => {
                state.laoding = false;
                state.items = action.payload;
                state.status = action.payload.status || 200;
            })
            .addCase(deletedProduct.rejected, (state, action) => {
                state.laoding = false;
                state.status = action.payload.status || 404;
                state.message = action.payload.message || 'Something went wrong.';
            })
    }
});


export default productSlice.reducer;