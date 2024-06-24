import React, { useState } from "react";
import "./searchModule.scss";
import { Link } from "react-router-dom";

const SearchModule = ({ data, setSearchValue }) => {
  console.log(data);

  return (
    <div className="search__module__wrapper">
      {data?.map((product) => (
        <Link
          to={`/products/${product.id}`}
          className="search__card"
          key={product.id}
          onClick={() => setSearchValue(``)}
        >
          <img width={30} src={product.images[0]} alt="" />
          <h1>{product.title}</h1>
        </Link>
      ))}
    </div>
  );
};

export default SearchModule;
