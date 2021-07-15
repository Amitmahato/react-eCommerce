import React, { createContext, useReducer } from "react";
import { productInterface } from "../data";
import cartReducer, {
  CartAcitonTypes,
  cartStateInterface,
} from "./Cart-reducer";

const initialState: cartStateInterface = {
  cartItems: [],
  itemCount: 0,
  total: 0,
};

const CartContext = createContext(initialState);

const CartContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = (product: productInterface) => {
    dispatch({ type: CartAcitonTypes.ADD_ITEM, payload: product });
  };
  const removeProduct = (product: productInterface) => {
    dispatch({ type: CartAcitonTypes.REMOVE_ITEM, payload: product });
  };
  const increaseQuantity = (product: productInterface) => {
    dispatch({ type: CartAcitonTypes.INCREASE_ITEM, payload: product });
  };
  const decreaseQuantity = (product: productInterface) => {
    dispatch({ type: CartAcitonTypes.DECREASE_ITEM, payload: product });
  };
  const clearAllProducts = () => {
    dispatch({ type: CartAcitonTypes.CLEAR_ALL, payload: [] });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
        clearAllProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
export default CartContextProvider;
