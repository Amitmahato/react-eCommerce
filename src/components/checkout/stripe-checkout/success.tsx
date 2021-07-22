import { Button } from "antd";
import React, { useContext, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import styled from "styled-components";
import { CartContext } from "../../../context/Cart-context";
import Layout from "../../layout";

const SuccessWrapper = styled.div`
  text-align: center;
`;

const Success: React.FC<RouteComponentProps<any>> = ({ history }) => {
  const { clearAllProducts } = useContext(CartContext);
  useEffect(() => {
    // @ts-ignore
    clearAllProducts();
  }, [clearAllProducts]);

  return (
    <Layout>
      <SuccessWrapper>
        <h2>Thank you for your order</h2>
        <p>
          Your order is being processed. Expect to receive an email for tracking
          your order
        </p>

        <div>
          <Button onClick={() => history.push("/shop")}>
            Continue Shopping
          </Button>
        </div>
      </SuccessWrapper>
    </Layout>
  );
};

export default withRouter(Success);
