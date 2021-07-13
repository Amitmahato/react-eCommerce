import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import studioBag from "../../assets/studio-bag.png";
import styled from "styled-components";
import { Button } from "antd";

const MainSectionWrapper = styled.div`
  width: 70%;
  margin: 3rem auto;
  padding-bottom: 3rem;
  /* display: flex;
  flex-direction: row; */

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .ms-m-description {
    p {
      font-size: 0.933rem;
      line-height: 1.5;
    }
  }

  .is-blue {
    background-color: #40a9ff;
    color: white;

    :hover {
      color: #40a9ff;
      background-color: white;
    }
  }

  .productImage {
    img {
      max-width: 225px;
      flex: 1 0 225px;
    }
  }

  @media (min-width: 1024px) {
    .main-section-middle {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      .productImage {
        max-width: 225px;
        flex: 1 0 225px;
      }
      .ms-m-description {
        margin-left: 30px;
        align-self: center;
        p {
          font-size: 1.1rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .main-section-middle {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .productImage {
        img {
          max-width: 100%;
          flex: 1 0 525px;
        }
      }
      .ms-m-description {
        align-self: center;
        p {
          font-size: 1.1rem;
        }
      }
    }
  }
`;

const MainSection: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <MainSectionWrapper>
      <div className="main-section-middle">
        <div className="productImage">
          <img src={studioBag} alt="studio bag" />
        </div>
        <div className="ms-m-description">
          <h2>Designed for fashion. Crafted for sport.</h2>
          <p>
            We make products that effortlessly transition from day to night.
            From the board room to the fitness studio, and everywhere in
            between, each Nomads piece is thoughtfully created to be the perfect
            balance of form and function.
          </p>
          <Button
            className="is-blue"
            id="shop-now"
            onClick={() => history.push("/product/1")}
          >
            STUDIO BAG
          </Button>
        </div>
      </div>
    </MainSectionWrapper>
  );
};

export default withRouter(MainSection);
