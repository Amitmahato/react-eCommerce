import React from "react";
import Layout from "../layout";
import Hero from "../hero";
import MainSection from "../main-section";
import FeaturedProductCollection from "../featured-collection";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <MainSection />
      <FeaturedProductCollection />
    </Layout>
  );
};

export default HomePage;
