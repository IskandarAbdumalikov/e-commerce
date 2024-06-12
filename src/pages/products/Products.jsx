import React, { useEffect, useState } from "react";
import "./products.scss";
import { useGetAllProductsQuery } from "../../features/apiSlice";
import { useGetCategoriesQuery } from "../../features/categoryApi";

const Products = () => {
  const { data, isLoading } = useGetAllProductsQuery();


  return <div>Products</div>;
};

export default Products;
