import { ICartItems } from "../context/Cart-reducer";
import { productInterface } from "../data";

export const FindInCart = (
  product: productInterface,
  cartItems: ICartItems[]
) => {
  return cartItems.find((item) => item.id === product.id);
};
