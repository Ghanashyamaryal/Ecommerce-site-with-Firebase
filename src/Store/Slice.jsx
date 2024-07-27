import { useState } from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const Products = createSlice({
    name: "product",
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            return state.filter((product) => product.id !== action.payload);
        }
    }
});

export const { add, remove } = Products.actions;

export default Products.reducer;
