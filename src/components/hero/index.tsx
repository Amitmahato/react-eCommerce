import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import HeroImage from "../../assets/ben-white-unsplash.jpg";

const HeroWrapper = styled.section`
  height: 85vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${HeroImage}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .container {
    padding-left: ${({ theme }) => {
      return theme.containerPadding ? theme.containerPadding.paddingLR : "40px";
    }};
    text-align: center;
  }

  .hero-title {
    color: white;
    font-size: 2rem;
    font-weight: 600;
  }

  .is-white {
    color: black;
    border: 1px solid white;
    background-color: white;

    :hover {
      color: white;
      border: 1px solid black;
      background-color: black;
    }
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="hero-body">
        <div className="container">
          <h1 className="hero-title">Bags reimagined for modern life.</h1>
          <div className="shop-now-btn">
            <Button className="is-white">SHOP NOW</Button>
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
