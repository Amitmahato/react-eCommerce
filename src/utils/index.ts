import { ICartItems } from "../context/Cart-reducer";

export const storeCartItems = (cartItems: ICartItems[]) => {
  const cart = cartItems.length > 0 ? cartItems : [];
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const loadCartItems = () => {
  const cartItems = localStorage.getItem("cart");
  if (cartItems) {
    return JSON.parse(cartItems);
  }
  return [];
};

export const removeCart = () => {
  localStorage.removeItem("cart");
};
