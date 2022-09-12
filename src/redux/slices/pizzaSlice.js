import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
  const { sortBy, order, category, search, selectedPage } = params;
  const responce = await axios.get(
    `https://62def0c1976ae7460be54171.mockapi.io/items?${category}&page=${selectedPage}&limit=4&sortby=${sortBy}&order=${order}${search}`,
  );
  return responce.data.items;
});

const initialState = {
  itemsPizza: [],
  status: 'loading', //loading | success | error
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.itemsPizza = action.payload;
      state.status = 'success';
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const selectPizza = (state) => state.pizza;

export const { setItems } = pizzaSlice.actions; //actions contain all that reducers contain in "pizzaSlice"

export default pizzaSlice.reducer;
