import { ICartItems } from "../context/Cart-reducer";
import { productInterface } from "../data";

export const FindInCart = (
  product: productInterface,
  cartItems: ICartItems[]
) => {
  return cartItems.find((item) => item.id === product.id);
};

const BASE_URL = "http://localhost:8080";

export const fetchFromAPI = async (endpoint: string, opts: {}) => {
  const { method, body } = { method: "POST", body: null, ...opts };

  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method,
    ...(body ? { body: JSON.stringify(body) } : {}),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};
