import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPizzas } from './asyncActions';
import { ItemsPizzaTypes, PizzaSliceState, Status } from './types';

const initialState: PizzaSliceState = {
  itemsPizza: [],
  status: Status.LOADING,
};

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
  },

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

export const { setItems } = pizzaSlice.actions; //actions contain all that reducers contain in "pizzaSlice"

export default pizzaSlice.reducer;
