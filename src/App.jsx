import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Layouts from "./components/layout";
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";

const App = () => {
  return (
    <Fragment>
      <Routes>
      <Route path="/" element={<Layouts/>}>
        <Route index element={<Home/>}/>
        
      </Route>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Fragment>
  );
};

export default App;


