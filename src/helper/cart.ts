import { productInterface } from "../data";

export const FindInCart = (
  product: productInterface,
  cartItems: productInterface[]
) => {
  return cartItems.find((item) => item.id === product.id);
};
