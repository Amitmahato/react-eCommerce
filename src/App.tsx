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
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./components/checkout";

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
  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PULBLISH_KEY || ""
  );
  const [products, setProducts] = useState(SHOP_DATA);
  return (
    <Elements stripe={stripePromise}>
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
              <Route exact path="/checkout" component={Checkout} />
              <Route path="*" component={NotFound} />
            </Switch>
          </ThemeProvider>
        </CartContextProvider>
      </AppContext.Provider>
    </Elements>
  );
}

export { AppContext };
export default App;
