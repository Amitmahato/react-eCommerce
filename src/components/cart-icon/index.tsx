import React from "react";
import ShoppingBag from "../../assets/shopping-bag.png";
import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../context/Cart-context";
import { Badge } from "antd";

const CartWrapper = styled.div`
  margin-left: auto;
  cursor: pointer;
  & img {
    width: 30px;
  }
`;

const CartIcon = () => {
  const { itemCount } = useContext(CartContext);
  return (
    <CartWrapper>
      <Badge
        count={itemCount}
        overflowCount={99}
        offset={[-5, 24]}
        size="small"
      >
        <img src={ShoppingBag} alt="shopping bag" />
      </Badge>
    </CartWrapper>
  );
};

export default CartIcon;
