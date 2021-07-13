import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 2rem;
  font-weight: 600;

  > .not-found {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .pipe {
    border: 1px solid rgba(0, 0, 0, 0.1);
    height: 30px;
    margin: 0 1rem;
  }

  a {
    margin: 1rem;
    font-size: 1rem;
    font-weight: normal;
    text-decoration: none;
    color: black;
  }
`;

const NotFound: React.FC = () => {
  return (
    <NotFoundWrapper>
      <div className="not-found">
        404 <div className="pipe" /> Page Not Found
      </div>
      <Link to="/">« Back To Home</Link>
    </NotFoundWrapper>
  );
};

export default NotFound;
