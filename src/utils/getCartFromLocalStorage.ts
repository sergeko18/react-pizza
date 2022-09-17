import { calcTotalPrice } from './calcTotalPrice';

export const getCartFromLocalStorAge = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items,
    totalPrice,
  };
};

export const getPizzaCountFromLocalStorage = () => {
  const data = localStorage.getItem('pizzaCounter');
  const pizzaCountFromLS = data ? JSON.parse(data) : [];
  return pizzaCountFromLS;
}