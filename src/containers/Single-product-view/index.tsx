import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppContext } from "../../App";
import Layout from "../../components/layout";
import { productInterface } from "../../data";
import { Button } from "antd";

const ProductViewWrapper = styled.div`
  padding: ${({ theme }) => theme.containerPadding.paddingLR};

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;

    .product-details,
    .image-wrapper {
      margin-right: 4rem;
      flex: 0 0 400px;
      img {
        width: 100%;
      }
    }

    .name-price {
      font-size: 1rem;
      font-weight: 600;
    }

    .add-to-cart-btns {
      display: flex;
      height: 80px;
      margin-bottom: 1.5rem;
      flex-flow: column wrap;
      justify-content: space-between;

      .is-white {
        color: black;
        background-color: white;

        :hover {
          color: white;
          background-color: black;
        }
      }
    }
  }
`;

const SingleProductView: React.FC<RouteComponentProps<any>> = ({
  match,
  history,
}) => {
  const { products } = useContext(AppContext);
  const { id } = match.params;
  const [product, setProduct] = useState<productInterface | null>(null);

  useEffect(() => {
    const p = products.find((item) => Number(item.id) === Number(id));
    if (!p) {
      history.push("/shop");
    } else {
      setProduct(p);
    }
  }, [id, products, history]);

  return (
    product && (
      <Layout>
        <ProductViewWrapper>
          <div className="image-wrapper">
            <img src={product.imageUrl} alt={product.title} />
          </div>
          <div className="product-details">
            <div className="name-price">
              <h3>{product.title}</h3>
              <p>$ {product.price}</p>
            </div>
            <div className="add-to-cart-btns">
              <Button className="is-white">ADD TO CART</Button>
              <Button>PROCEED TO CHECKOUT</Button>
            </div>
            <div className="product-description">{product.description}</div>
          </div>
        </ProductViewWrapper>
      </Layout>
    )
  );
};

export default withRouter(SingleProductView);
