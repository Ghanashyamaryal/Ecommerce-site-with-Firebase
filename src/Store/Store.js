import { configureStore } from "@reduxjs/toolkit";
import productreducer from "./Slice"

export const store = configureStore({
    reducer : {
     cart : productreducer
    } 
})