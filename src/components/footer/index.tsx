import moment from "moment";
import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  width: 50%;
  margin: 4rem auto;
  padding-bottom: 2rem;
  text-align: center;
`;

const Footer: React.FC = () => {
  const year = moment().get("year");
  return <FooterWrapper>{year} © eCommerce Store</FooterWrapper>;
};

export default Footer;
