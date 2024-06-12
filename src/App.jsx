import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Layouts from "./components/layout";
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import Contact from "./pages/contact/Contact";
import Likes from "./pages/likes/Likes";
import Categories from "./pages/categories/Categories";
import SingleCategory from "./pages/single-category/SingleCategory";
import SingleProduct from "./pages/single-product/SingleProduct";
import Products from "./pages/products/Products";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="likes" element={<Likes />} />
          <Route path="categories" element={<Categories />} />
          <Route path="about" element={<About/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="products" element={<Products />} />
          <Route path="categories/:categoryId" element={<SingleCategory />} />
          <Route path="products/:productsId" element={<SingleProduct />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
};

export default App;
