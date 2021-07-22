import { Button } from "antd";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import styled from "styled-components";
import Layout from "../../layout";

const CancelWrapper = styled.div`
  text-align: center;
`;

const Cancel: React.FC<RouteComponentProps<any>> = ({ history }) => {
  return (
    <Layout>
      <CancelWrapper>
        <h2>Payment Failed</h2>
        <p>Payment was not successfull</p>

        <div>
          <Button onClick={() => history.push("/shop")}>
            Continue Shopping
          </Button>
        </div>
      </CancelWrapper>
    </Layout>
  );
};

export default withRouter(Cancel);
