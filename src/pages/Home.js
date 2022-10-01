import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <h2 className="heading">Welcome To Redux Toolkit Store</h2>
      <section>
        <h5>Products</h5>
        <Products />
      </section>
    </div>
  );
};
export default Home;
