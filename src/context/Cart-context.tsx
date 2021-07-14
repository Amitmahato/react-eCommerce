import React, { createContext, useReducer } from "react";
import cartReducer from "./Cart-reducer";

interface cartStateInterface {
  cartItems: [];
  itemCount: number;
  total: number;
}

const initialState: cartStateInterface = {
  cartItems: [],
  itemCount: 0,
  total: 0,
};

const CartContext = createContext(initialState);

const CartContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  );
};

export { CartContext };
export default CartContextProvider;
