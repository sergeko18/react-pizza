export type SortType = {
  name:
    | 'популярности(у)'
    | 'популярности(в)'
    | 'цене(у)'
    | 'цене(в)'
    | 'алфавиту(у)'
    | 'алфавиту(в)';
  sortApiName: 'rating' | 'price' | 'name' | '-rating' | '-price' | '-name';
};

export interface SetFiltersInterface {
  activeCategory: number;
  selectedPage: number;
  sort: SortType;
}

export interface FilterSliceState {
  activeCategory: number;
  selectedPage: number;
  searchValue: string;
  sort: SortType;
}
