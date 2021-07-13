import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { productInterface } from "../../data";

const FeaturedProductWrapper = styled.div`
  border: 1px solid #0c223522;
  padding: 1rem;
  /* flex-grow: 0.25; */

  .imageWrapper {
    img {
      width: 220px;
    }
  }

  .productDetails {
    font-size: 1rem;
    font-weight: 600;
  }

  .full-width {
    width: 100%;
  }
`;

const FeaturedProduct: React.FC<{ product: productInterface }> = ({
  product,
}) => {
  const { title, imageUrl, price } = product;

  return (
    <FeaturedProductWrapper>
      <div className="imageWrapper">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="productDetails">
        <h3>{title}</h3>
        <p>$ {price}</p>
        <Button className="full-width">ADD TO CART</Button>
      </div>
    </FeaturedProductWrapper>
  );
};

export default FeaturedProduct;
