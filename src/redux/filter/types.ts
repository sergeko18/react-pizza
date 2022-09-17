export type SortType = {
  name:
    | 'popularity(a–z)'
    | 'popularity(z–a)'
    | 'price(a–z)'
    | 'price(z–a)'
    | 'alphabet(a–z)'
    | 'alphabet(z–a)';
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
