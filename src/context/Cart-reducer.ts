import { Reducer } from "react";
import { productInterface } from "../data";
import { FindInCart } from "../helper/cart";

interface cartStateInterface {
  cartItems: any[];
  itemCount: number;
  total: number;
  addProduct?: React.Dispatch<any>;
  removeProduct?: React.Dispatch<any>;
  increaseQuantity?: React.Dispatch<any>;
  decreaseQuantity?: React.Dispatch<any>;
  clearAllProducts?: React.Dispatch<any>;
}

enum CartAcitonTypes {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  INCREASE_ITEM = "INCREASE_ITEM",
  DECREASE_ITEM = "DECREASE_ITEM",
  CLEAR_ALL = "CLEAR_ALL",
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
    case CartAcitonTypes.REMOVE_ITEM: {
      const itemIndex = state.cartItems.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.cartItems.splice(itemIndex, 1);
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...addItems(state.cartItems),
      };
    }
    case CartAcitonTypes.INCREASE_ITEM: {
      if (!FindInCart(action.payload, state.cartItems)) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      } else {
        const itemIndex = state.cartItems.findIndex(
          (item: any) => item.id === action.payload.id
        );
        state.cartItems[itemIndex].quantity += 1;
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...addItems(state.cartItems),
      };
    }
    case CartAcitonTypes.DECREASE_ITEM: {
      const itemIndex = state.cartItems.findIndex(
        (item: any) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        if (action.payload.quantity > 1) {
          state.cartItems[itemIndex].quantity -= 1;
        } else {
          state.cartItems.splice(itemIndex, 1);
        }
      }

      return {
        ...state,
        cartItems: [...state.cartItems],
        ...addItems(state.cartItems),
      };
    }
    case CartAcitonTypes.CLEAR_ALL: {
      return {
        ...state,
        cartItems: [],
        ...addItems([]),
      };
    }
    default:
      return state;
  }
};

export type { cartStateInterface };
export { CartAcitonTypes };
export default cartReducer;
