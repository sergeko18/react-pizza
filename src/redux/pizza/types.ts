export type ItemsPizzaTypes = {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number[];
  category: number;
  rating: number;
};

export enum Status { // enum - there is an object with types and values for variables
  LOADING = "loading",
  SUCCESS = "complited",
  ERROR = "error",
}

export interface PizzaSliceState {
  status: Status; //'loading' | 'success' | 'error';
  itemsPizza: ItemsPizzaTypes[];
}
