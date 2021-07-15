import { Button } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import { CartContext } from "../../context/Cart-context";
import CartItem from "./Cart-item";

const CartPageWrapper = styled.div`
  margin: 1rem;
  margin-bottom: 0;
  display: flex;
  flex-direction: row;
  height: ${() => `calc(100vh - 128px);`};

  .items-container {
    flex-basis: 70%;
    height: 100%;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    overflow: scroll;
    &::-webkit-scrollbar {
      width: 0px;
    }
    .empty-cart {
      height: 100%;
      margin-top: 2rem;
      align-self: center;
    }
  }

  .cart-summary {
    flex-grow: 1;
    padding-top: 1rem;
    padding-left: 1rem;
    font-weight: 600;

    .cart-action {
      width: 60%;
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

const CartPage: React.FC = () => {
  const {
    cartItems,
    itemCount,
    total,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
    clearAllProducts,
  } = useContext(CartContext);
  return (
    <Layout>
      <CartPageWrapper>
        <div className="items-container">
          {itemCount > 0 ? (
            cartItems.map((item: any) => (
              <CartItem
                item={item}
                handleIncrease={() => {
                  if (increaseQuantity) {
                    increaseQuantity(item);
                  }
                }}
                handleDecrease={() => {
                  if (decreaseQuantity) decreaseQuantity(item);
                }}
                handleItemRemoval={() => {
                  if (removeProduct) removeProduct(item);
                }}
              />
            ))
          ) : (
            <div className="empty-cart">Your cart is empty</div>
          )}
        </div>
        <div className="cart-summary">
          <div className="total-quantity">Total Quantity: {itemCount}</div>
          <div className="total-price">Total Price: ${total}</div>
          {itemCount > 0 && (
            <ButtonGroup className="cart-action">
              <Button onClick={clearAllProducts}>Clear All</Button>
              <Button
                onClick={() => {
                  // TODO - process checkout
                  console.log("Process checkout!");
                }}
              >
                Checkout
              </Button>
            </ButtonGroup>
          )}
        </div>
      </CartPageWrapper>
    </Layout>
  );
};

export default CartPage;
