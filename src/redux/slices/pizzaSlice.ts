import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

export type ItemsPizzaTypes = {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

enum Status {    // enum - there is an object with types and values for variables 
  LOADING = 'loading',
  SUCCESS = 'complited',
  ERROR = 'error'
}

interface PizzaSliceState {
  status: Status;   //'loading' | 'success' | 'error';
  itemsPizza: ItemsPizzaTypes[];
}

const initialState: PizzaSliceState = {
  itemsPizza: [],
  status: Status.LOADING
};
  
export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params: Record<string, string>) => {
    const { sortBy, order, category, search, selectedPage } = params;
    const responce = await axios.get(
      `https://62def0c1976ae7460be54171.mockapi.io/items?${category}&page=${selectedPage}&limit=4&sortby=${sortBy}&order=${order}${search}`,
    );
    return responce.data.items as ItemsPizzaTypes[];
  },
);

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ItemsPizzaTypes[]>) {
      state.itemsPizza = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.itemsPizza = [];
    });
    
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.itemsPizza = action.payload;
      state.status = Status.SUCCESS;
    });
    
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.itemsPizza = [];
    });
  }

//   extraReducers: {
//     [fetchPizzas.pending]: (state) => {
//       state.status = 'loading';
//       state.items = [];
//     },
//     [fetchPizzas.fulfilled]: (state, action) => {
//       state.itemsPizza = action.payload;
//       state.status = 'success';
//     },
//     [fetchPizzas.rejected]: (state) => {
//       state.status = 'error';
//       state.items = [];
//     },
});
  
export const selectPizza = (state: RootState) => state.pizza;

export const { setItems } = pizzaSlice.actions; //actions contain all that reducers contain in "pizzaSlice"

export default pizzaSlice.reducer;
