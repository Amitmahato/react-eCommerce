import { Button, Tooltip } from "antd";
import React from "react";
import styled from "styled-components";
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import ButtonGroup from "antd/lib/button/button-group";
import { ICartItems } from "../../context/Cart-reducer";

const ItemWrapper = styled.div`
  margin: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;

  .image-wrapper {
    img {
      width: 80px;
    }
    @media (min-width: 850px) {
      flex-basis: 150px;
    }
  }

  .name-price {
    flex-basis: 200px;
    h4 {
      margin: 0;
      font-size: 1rem;
      font-weight: 600;
    }
    p {
      font-size: 1rem;
      font-weight: normal;
    }

    @media (max-width: 799px) {
      margin-top: 1rem;
      flex-basis: 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    @media (min-width: 800px) and (max-width: 1024px) {
      flex-basis: 100px;
    }
  }

  .item-quantity {
    font-weight: 600;
  }

  @media (max-width: 799px) {
    flex-direction: column;
  }
`;

interface cartItemInterface {
  item: ICartItems;
  handleIncrease?: React.Dispatch<any>;
  handleDecrease?: React.Dispatch<any>;
  handleItemRemoval?: React.Dispatch<any>;
}

const CartItem: React.FC<cartItemInterface> = ({
  item,
  handleIncrease,
  handleDecrease,
  handleItemRemoval,
}) => {
  const { imageUrl, quantity, price, title } = item;
  return (
    <ItemWrapper>
      <div className="image-wrapper">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="name-price">
        <h4>{title}</h4>
        <p>$ {price}</p>
      </div>
      <div className="item-quantity">
        <p>{`Quantity: ${quantity}`}</p>
      </div>
      <ButtonGroup size="middle">
        <Tooltip title="Increase Quantity" mouseEnterDelay={1}>
          <Button onClick={handleIncrease}>
            <PlusCircleOutlined />
          </Button>
        </Tooltip>
        {quantity > 0 && (
          <Tooltip title="Decrease Quantity" mouseEnterDelay={1}>
            <Button onClick={handleDecrease}>
              <MinusCircleOutlined />
            </Button>
          </Tooltip>
        )}
        {quantity > 0 && (
          <Tooltip title="Remove Item" mouseEnterDelay={1}>
            <Button onClick={handleItemRemoval}>
              <DeleteOutlined color="#992222" />
            </Button>
          </Tooltip>
        )}
      </ButtonGroup>
    </ItemWrapper>
  );
};

export default CartItem;
