import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState, SetFiltersInterface, SortType } from './types';

const initialState: FilterSliceState = {
  activeCategory: 0,
  selectedPage: 1,
  sort: { name: 'popularity(a–z)', sortApiName: 'rating' },
  searchValue: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<number>) => {
      state.activeCategory = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },
    setSelectedPage(state, action: PayloadAction<number>) {
      state.selectedPage = action.payload;
    },
    setFilters(state, action: PayloadAction<SetFiltersInterface>) {
      state.activeCategory = Number(action.payload.activeCategory);
      state.selectedPage = Number(action.payload.selectedPage);
      state.sort = action.payload.sort;
    },
  },
});


export const { setActiveCategory, setSort, setSelectedPage, setFilters, setSearchValue } =
  filterSlice.actions; //actions contain all that reducers contain in "filterSlice"

export default filterSlice.reducer;
