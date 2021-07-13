import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartIcon from "../cart-icon";

const HeaderWrapper = styled.nav`
  padding: ${({ theme }) => {
    return theme.containerPadding
      ? `${theme.containerPadding.paddingTB} ${theme.containerPadding.paddingLR}`
      : "10px 40px";
  }};
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    text-decoration: none;

    :focus,
    :visited {
      color: black;
    }

    :hover {
      text-decoration: underline;
    }
  }

  ul {
    list-style-type: none;
    margin: 0;
    margin-left: auto;

    li {
      display: inline-block;
      margin: 0 1rem;
    }
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="logo">eCommerce</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
      <CartIcon />
    </HeaderWrapper>
  );
};

export default Header;
