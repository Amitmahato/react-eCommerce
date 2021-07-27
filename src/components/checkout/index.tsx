import React, { useContext } from "react";
import { CartContext } from "../../context/Cart-context";
import Layout from "../layout";
import styled from "styled-components";
import StripeCheckout from "./stripe-checkout";
import { withRouter } from "react-router-dom";
import ShippingAddress from "./custom-checkout";

const CheckoutWrapper = styled.div`
  width: 50%;
  height: 82vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h3 {
    font-size: 1.1.rem;
    font-weight: 600;
  }
`;

const Checkout: React.FC<any> = ({ match }) => {
  const { itemCount, total } = useContext(CartContext);
  return (
    <Layout>
      <CheckoutWrapper>
        <h2>Checkout Summary</h2>
        <h3>Total Items : {itemCount}</h3>
        <h3>Total Payable : ${total}</h3>
        {match.path === "/stripe-checkout" ? (
          <StripeCheckout />
        ) : (
          <ShippingAddress />
        )}
      </CheckoutWrapper>
    </Layout>
  );
};

export default withRouter(Checkout);
