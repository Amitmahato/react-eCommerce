import { Reducer } from "react";
import { productInterface } from "../data";

interface cartStateInterface {
  cartItems: any[];
  itemCount: number;
  total: number;
  addProduct?: React.Dispatch<any>;
}

enum CartAcitonTypes {
  ADD_ITEM = "ADD_ITEM",
}

const addItems = (cartItems: (productInterface & { quantity: number })[]) => {
  return {
    itemCount: cartItems.reduce(
      (total, item) => Number(total) + Number(item.quantity),
      0
    ),
    total: cartItems.reduce(
      (total, item) =>
        Number(total) + Number(item.price) * Number(item.quantity),
      0
    ),
  };
};

const cartReducer: Reducer<cartStateInterface, any> = (state, action) => {
  switch (action.type) {
    case CartAcitonTypes.ADD_ITEM: {
      if (!state.cartItems.find((item: any) => item.id === action.payload.id)) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...addItems(state.cartItems),
      };
    }
    default:
      return state;
  }
};

export type { cartStateInterface };
export { CartAcitonTypes };
export default cartReducer;
