export type CartItemType = {
  id: string;
  imageUrl: string;
  name: string;
  type: string;
  size: number;
  count: number;
  price: number;
};

export interface CaratSliceState {
  totalPrice: number;
  items: CartItemType[];
}
