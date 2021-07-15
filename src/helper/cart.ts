import { productInterface } from "../data";

export const FindInCart = (
  product: productInterface,
  cartItems: (productInterface & { quantity: number })[]
) => {
  return cartItems.find((item) => item.id === product.id);
};
