import React from "react";
import "antd/dist/antd.css";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { createContext } from "react";
import { useState } from "react";
import SHOP_DATA, { productInterface } from "./data";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/homepage";
import NotFound from "./components/404";
import Shop from "./containers/shop";
import SingleProductView from "./containers/Single-product-view";
import CartContextProvider from "./context/Cart-context";
import CartPage from "./containers/Cart";

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
      <CartContextProvider>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/product/:id" component={SingleProductView} />
            <Route exact path="/cart" component={CartPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </ThemeProvider>
      </CartContextProvider>
    </AppContext.Provider>
  );
}

export { AppContext };
export default App;
