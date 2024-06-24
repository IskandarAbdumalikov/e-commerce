import React from "react";
import Hero from "../../components/hero/Hero";
import Products from "../products/Products";

const Home = () => {
  return (
    <div>
      <Hero />
      <Products sliceFrom={0} sliceTo={4} title={"Акции"} />
      <Products sliceFrom={4} sliceTo={8} title={"Новинки"} />
      <Products sliceFrom={8} sliceTo={12} title={"Покупали раньше"} />
    </div>
  );
};

export default Home;
