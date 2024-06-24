import React from "react";
import { useGetSingleCategoryQuery } from "../../features/categoryApi";
import { useParams } from "react-router-dom";
import { useGetAllCategoryProductsQuery } from "../../features/apiSlice";

const SingleCategory = () => {
  let { categoryId } = useParams();
  let { data } = useGetSingleCategoryQuery(categoryId);
  let { productsData } = useGetAllCategoryProductsQuery(_, categoryId);
  console.log(productsData);
  return <div>SingleCategory</div>;
};

export default SingleCategory;
