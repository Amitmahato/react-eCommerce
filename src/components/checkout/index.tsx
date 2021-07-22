import React, { useContext } from "react";
import { CartContext } from "../../context/Cart-context";
import Layout from "../layout";
import styled from "styled-components";
import StripeCheckout from "./stripe-checkout";

const CheckoutWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;

  h3 {
    font-size: 1.1.rem;
    font-weight: 600;
  }
`;

const Checkout: React.FC<any> = () => {
  const { itemCount, total } = useContext(CartContext);
  return (
    <Layout>
      <CheckoutWrapper>
        <h2>Checkout Summary</h2>
        <h3>Total Items : {itemCount}</h3>
        <h3>Total Payable : ${total}</h3>
        <StripeCheckout />
      </CheckoutWrapper>
    </Layout>
  );
};

export default Checkout;
