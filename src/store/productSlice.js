import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";
const initalState = {
  products: products,
  selectedProduct:null,
};

export const productSlice = createSlice({
  name: "products",
  initialState: initalState,
  reducers: {
    setSelectedProduct: (state, action) => {
      console.log(action);
      console.log(state);
      state.selectedProduct = state.products.find((product) => {
        return product.id === action.payload;
      })
    },
  },
});