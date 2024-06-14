import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
    getAllProducts,
    addNewProduct,
    deleteProduct,
} from "../API/ProductAPI";

export const getAllProductsAction = createAsyncThunk(
    "products/getAllProductsAction",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            let response = await getAllProducts();
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const addNewProductAction = createAsyncThunk(
    "products/addNewProductAction",
    async (product, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            let response = await addNewProduct(product);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const deleteProductAction = createAsyncThunk(
    "products/deleteProductAction",
    async (productId, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            let response = await deleteProduct(productId);
            return productId;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const productSlice = createSlice({
    name: "products",
    initialState: { products: [], error: null, isLoading: false },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProductsAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllProductsAction.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoading = false;
            })
            .addCase(getAllProductsAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addNewProductAction.fulfilled, (state, action) => {
                state.products.push(action.payload);
            })
            .addCase(addNewProductAction.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(deleteProductAction.fulfilled, (state, action) => {
                state.products = state.products.filter(
                    (product) => product.id !== action.payload
                );
            })
            .addCase(deleteProductAction.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
