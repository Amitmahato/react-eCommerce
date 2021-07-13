import React from "react";
import ShoppingBag from "../../assets/shopping-bag.png";
import styled from "styled-components";

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
  return (
    <CartWrapper>
      <img src={ShoppingBag} alt="shopping bag" />
      <span className="cart-item-count">5</span>
    </CartWrapper>
  );
};

export default CartIcon;
