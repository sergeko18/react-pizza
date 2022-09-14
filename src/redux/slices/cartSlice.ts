import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type CartItemType = {
  id: string;
  imageUrl: string;
  name: string;
  type: string;
  size: number;
  count: number;
  price: number;
};

interface CaratSliceState {
  totalPrice: number;
  items: CartItemType[];
}

const initialState: CaratSliceState = {
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

      state.totalPrice = state.items.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
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

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemsById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);

export const { addItem, removeItem, clearItems, decrementItem } = cartSlice.actions; //actions contain all that reducers contain in "cartSlice"

export default cartSlice.reducer;
