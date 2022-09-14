import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type SortType = {
  name: 'популярности(у)' | 'популярности(в)' | 'цене(у)' | 'цене(в)' | 'алфавиту(у)' | 'алфавиту(в)';
  sortApiName: 'rating' | 'price' | 'name' | '-rating' | '-price' | '-name' ;
};

interface SetFiltersInterface {
  activeCategory: number;
  selectedPage: number;
  sort: SortType;
}

interface FilterSliceState {
  activeCategory: number;
  selectedPage: number;
  searchValue: string;
  sort: SortType;
}

const initialState: FilterSliceState = {
  activeCategory: 0,
  selectedPage: 1,
  sort: { name: 'популярности(у)', sortApiName: 'rating' },
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

export const selectFilter = (state: RootState) => state.filter;

export const { setActiveCategory, setSort, setSelectedPage, setFilters, setSearchValue } =
  filterSlice.actions; //actions contain all that reducers contain in "filterSlice"

export default filterSlice.reducer;
