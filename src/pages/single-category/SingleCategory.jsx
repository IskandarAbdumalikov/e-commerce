import React from "react";
import { useGetSingleCategoryQuery } from "../../features/categoryApi";
import { useParams } from "react-router-dom";
import { useGetAllCategoryProductsQuery } from "../../features/apiSlice";

const SingleCategory = () => {
  let { categoryId } = useParams();
  let { data } = useGetSingleCategoryQuery(categoryId);
  console.log(categoryId);
  return <div style={{paddingTop:"100px"}} className="container"><img style={{borderRadius:"10px"}} width={500} src={data?.img} alt="" /> <h2 style={{marginTop:"40px"}}>{data?.name}</h2></div>;
};

export default SingleCategory;
