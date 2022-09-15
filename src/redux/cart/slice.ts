import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getCartFromLocalStorAge } from '../../utils/getCartFromLocalStorage';
import { CaratSliceState, CartItemType } from './types';

const cartDataFromLS = getCartFromLocalStorAge();

const initialState: CaratSliceState = {
  items: cartDataFromLS.items,
  totalPrice: cartDataFromLS.totalPrice,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addItem(state, action) {
    //   state.items.push(action.payload);
    // state.totalPrice = state.items.reduce((sum, obj) => {
    //   return sum + obj.price;
    // }, 0);
    // },
    addItem(state, action: PayloadAction<CartItemType>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },

    decrementItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        if (findItem.count) {
          findItem.count--;
          state.totalPrice -= findItem.price;
        }
      }
    },

    removeItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        state.items = state.items.filter((obj) => obj.id !== action.payload);
        state.totalPrice -= findItem.price * findItem.count;
      }
    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, decrementItem } = cartSlice.actions; //actions contain all that reducers contain in "cartSlice"

export default cartSlice.reducer;
