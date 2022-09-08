import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
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
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
    },

    decrementItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        if (findItem.count) {
          findItem.count--;
          state.totalPrice -= findItem.price;
        }
      }
    },

    removeItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice -= findItem.price * findItem.count;
    },

    clearItems(state, action) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, setTotalPrice, decrementItem } = cartSlice.actions; //actions contain all that reducers contain in "cartSlice"

export default cartSlice.reducer;
