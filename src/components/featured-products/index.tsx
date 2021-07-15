import { Badge, Button } from "antd";
import React from "react";
import { useContext } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../../context/Cart-context";
import { productInterface } from "../../data";
import { FindInCart } from "../../helper/cart";

const FeaturedProductWrapper = styled.div`
  border: 1px solid #0c223522;
  padding: 1rem;
  transition: all 0.5s;
  :hover {
    transform: scale(1.05, 1.05);
  }

  @media (max-width: 619px) {
    flex-grow: 1;
  }

  @media (max-width: 889px) {
    flex-grow: 0.5;
  }

  .imageWrapper {
    cursor: pointer;
    img {
      width: 220px;
    }

    @media (max-width: 619px) {
      img {
        width: 100%;
      }
    }

    @media (min-width: 620px) and (max-width: 889px) {
      img {
        width: 280px;
      }
    }
  }

  .productDetails {
    font-size: 1rem;
    font-weight: 600;

    .full-width {
      width: 100%;
    }
  }

  .is-white {
    color: black;
    border: 1px solid black;
    background-color: white;
  }
`;

const FeaturedProduct: React.FC<
  { product: productInterface } & RouteComponentProps
> = ({ product, history }) => {
  const { id, title, imageUrl, price } = product;
  const { cartItems, addProduct, increaseQuantity } = useContext(CartContext);

  const handleAddToCart = () => {
    if (addProduct) {
      addProduct(product);
    }
  };

  const handleAddMore = () => {
    if (increaseQuantity) {
      increaseQuantity(product);
    }
  };

  return (
    <FeaturedProductWrapper>
      <div
        className="imageWrapper"
        onClick={() => {
          history.push(`/product/${id}`);
        }}
      >
        <img src={imageUrl} alt={title} />
      </div>
      <div className="productDetails">
        <h3>{title}</h3>
        <p>$ {price}</p>
        {!FindInCart(product, cartItems) ? (
          <Button className="full-width" onClick={handleAddToCart}>
            ADD TO CART
          </Button>
        ) : (
          <Badge
            count={FindInCart(product, cartItems)?.quantity}
            className="full-width"
          >
            <Button className="full-width is-white" onClick={handleAddMore}>
              ADD MORE
            </Button>
          </Badge>
        )}
      </div>
    </FeaturedProductWrapper>
  );
};

export default withRouter(FeaturedProduct);
