import React from "react";
import ShoppingBag from "../../assets/shopping-bag.png";
import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../context/Cart-context";

const CartWrapper = styled.div`
  margin-left: auto;
  cursor: pointer;
  & img {
    width: 30px;
  }

  & .cart-item-count {
    margin-left: -10px;
    background-color: black;
    color: white;
    padding: 0 4px;
    border-radius: 50%;
  }
`;

const CartIcon = () => {
  const {itemCount} = useContext(CartContext)
  return (
    <CartWrapper>
      <img src={ShoppingBag} alt="shopping bag" />
      {itemCount > 0 ? <span className="cart-item-count">{itemCount}</span> : null}
    </CartWrapper>
  );
};

export default CartIcon;
