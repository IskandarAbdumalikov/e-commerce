import React, { Fragment } from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

const Layouts = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Layouts;
