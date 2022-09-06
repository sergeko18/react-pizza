import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    filter, // === filter: filter,
    cart, // === cart: cart
  },
});
