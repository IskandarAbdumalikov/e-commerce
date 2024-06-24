import React, { useEffect } from "react";
import "./singleProducts.scss";
import { Link, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../features/apiSlice";
// import Header from "../../components/header/Header";

const SingleProduct = () => {
  let { productsId } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(productsId);
  console.log(data);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productsId]);

  if (isLoading) {
    return (
      <div style={{ marginTop: "150px" }} className="single__loading container">
        <div className="single__loading__img bg__animation"></div>
        <div className="single__loading__info">
          <div className="single__loading__item bg__animation"></div>
          <div className="single__loading__item bg__animation"></div>
          <div className="single__loading__item bg__animation"></div>
          <div className="single__loading__item bg__animation"></div>
          <div className="single__loading__item bg__animation"></div>
          <div className="single__loading__item bg__animation"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* <Header /> */}
      <section className="single__item container">
        <div className="single__card">
          <div className="single__card__left">
            <img src={data.images[0]} alt={data.title} />
          </div>
          <div className="single__card__right">
            <h1 style={{ fontSize: "30px" }}>{data.title}</h1>
            <p>Description : {data.desc}</p>
            <p>Brand : {data.brand}</p>
            <p>Price : {data.price}$</p>
            <div className="single__btns">
              <Link to={'/'}>
                <button>Home</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
