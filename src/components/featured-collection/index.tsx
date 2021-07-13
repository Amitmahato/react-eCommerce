import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";
import { productInterface } from "../../data";
import FeaturedProduct from "../featured-products";

const ProductCollectionWrapper = styled.div`
  margin-top: 6rem;
  padding: ${({ theme }) => theme.containerPadding.paddingLR};

  .featured-collection-title {
    font-size: 2rem;
    font-weight: 600;
  }

  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > div {
      margin-right: 1rem;
      margin-bottom: 1rem;
    }
  }
`;

const FeaturedProductCollection: React.FC = () => {
  const { products } = useContext(AppContext);
  return (
    <ProductCollectionWrapper>
      <h2 className="featured-collection-title">Featured Collection</h2>
      <div className="products">
        {products
          .filter((product: productInterface) => product.id <= 4)
          .map((product: productInterface) => (
            <FeaturedProduct product={product} />
          ))}
      </div>
    </ProductCollectionWrapper>
  );
};

export default FeaturedProductCollection;
