import React from "react";
import Header from "../headers";
import Footer from "../footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
