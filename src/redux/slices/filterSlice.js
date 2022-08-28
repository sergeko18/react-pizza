import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: 0,
  selectedPage: 1,
  sort: { name: 'популярности(у)', sortApiName: 'rating' },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setSelectedPage(state, action) {
      state.selectedPage = action.payload;
    },
    setFilters(state, action) {
      state.activeCategory = Number(action.payload.activeCategory);
      state.selectedPage = Number(action.payload.selectedPage);
      state.sort = action.payload.sort;
    },
  },
});

export const { setActiveCategory, setSort, setSelectedPage, setFilters } = filterSlice.actions; //actions contain all that reducers contain in "filterSlice"

export default filterSlice.reducer;
