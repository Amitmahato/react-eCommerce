import React from "react";
import Header from "./components/headers";
import "antd/dist/antd.css";
import { ThemeProvider } from "styled-components";
import Hero from "./components/hero";
import MainSection from "./components/main-section";
import "./App.css";

const theme = {
  containerPadding: {
    paddingLR: "40px",
    paddingTB: "10px",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
      <MainSection />
    </ThemeProvider>
  );
}

export default App;
