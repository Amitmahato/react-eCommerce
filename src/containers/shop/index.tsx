import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";
import { productInterface } from "../../data";
import FeaturedProduct from "../../components/featured-products";
import Layout from "../../components/layout";

const ProductCollectionWrapper = styled.div`
  padding: ${({ theme }) => theme.containerPadding.paddingLR};

  .featured-collection-title {
    font-size: 1.5rem;
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

const Shop: React.FC = () => {
  const { products } = useContext(AppContext);
  return (
    <Layout>
      <ProductCollectionWrapper>
        <h2 className="featured-collection-title">Products Collection</h2>
        <div className="products">
          {products.map((product: productInterface) => (
            <FeaturedProduct
              product={product}
              key={`${product.title}_${product.id}`}
            />
          ))}
        </div>
      </ProductCollectionWrapper>
    </Layout>
  );
};

export default Shop;
