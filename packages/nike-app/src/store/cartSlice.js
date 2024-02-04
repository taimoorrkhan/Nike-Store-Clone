import { createSlice,createSelector } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  deliveryFee: 20,
  freeDeliveryFrom: 200,
  tax : 20,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,  // Correct the typo here
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product;
      const existingProduct = state.items.find((item) => item.product._id === newProduct._id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.items.push({ product: newProduct, quantity: 1 });
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeCartItem: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.product._id !== productId);
     },
    changeQuantity: (state, action) => { 
      const { productId, amount } = action.payload;
      const existingProduct = state.items.find((item) => item.product._id === productId);
      if (existingProduct) {
        existingProduct.quantity += amount;
      }
      if(existingProduct.quantity === 0){
        state.items = state.items.filter((item) => item.product._id !== productId);
      }
    },
  }
})

export const selectNumOFItems = (state) => state.cart.items.length;

export const selectSubtotal = (state) => {
  return state.cart.items.reduce((total, item) => {
    return total + item.quantity * item.product.price;
  }, 0);
}
const cartSelector = (state) => state.cart

export const selectTotal = createSelector(
  cartSelector,
  selectSubtotal,
  //also add tax
  (cart,subtotal) => {
    if(subtotal > cart.freeDeliveryFrom){
      return subtotal + cart.tax;
    }
    return subtotal + cart.tax + cart.deliveryFee;
  }
  )

