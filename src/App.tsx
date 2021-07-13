import React from "react";
import Header from "./components/headers";
import "antd/dist/antd.css";
import { ThemeProvider } from "styled-components";
import Hero from "./components/hero";
import MainSection from "./components/main-section";
import "./App.css";
import { createContext } from "react";
import { useState } from "react";
import SHOP_DATA, { productInterface } from "./data";
import FeaturedProductCollection from "./components/featured-collection";
import Footer from "./components/footer";

const theme = {
  containerPadding: {
    paddingLR: "40px",
    paddingTB: "10px",
  },
};

interface AppContextInterface {
  products: productInterface[];
  setProducts: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        title: string;
        description: string;
        imageUrl: string;
        price: number;
      }[]
    >
  >;
}

// @ts-ignore
const AppContext = createContext<AppContextInterface>(null);

function App() {
  const [products, setProducts] = useState(SHOP_DATA);
  return (
    <AppContext.Provider
      value={{
        // @ts-ignore
        products,
        setProducts,
      }}
    >
      <ThemeProvider theme={theme}>
        <Header />
        <Hero />
        <MainSection />
        <FeaturedProductCollection />
        <Footer />
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export { AppContext };
export default App;
