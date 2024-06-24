import React, { useState } from "react";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../features/apiSlice";
import { useGetCategoriesQuery } from "../../features/categoryApi";
import { Link, NavLink } from "react-router-dom";
import star from "../../assets/images/star.svg";
import halfStar from "../../assets/images/halfStar.svg";
import starRegular from "../../assets/images/starRegular.svg";

import "./products.scss";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Products = ({ sliceFrom, sliceTo, title }) => {
  const { data, isLoading } = useGetAllProductsQuery();
  const [handleDelete, { data: deletedData }] = useDeleteProductMutation();
  console.log(data);

  const getRating = (rating) => {
    let res = [];
    for (let i = 0; i < Math.trunc(rating); i++) {
      res.push(<img src={star} alt="" />);
    }
    if (rating % 1 > 0.4) {
      res.push(<img src={halfStar} alt="" />);
    }
    for (let i = Math.round(rating); i < 5; i++) {
      res.push(<img src={starRegular} alt="" />);
    }
    return res;
  };
  return (
    <div className="products container">
      <div className="products__header">
        <h1>{title}</h1>
        <Link>
          Все продукты <FaArrowRight />
        </Link>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="products__cards">
            {data?.slice(sliceFrom, sliceTo).map((product) => (
              <div key={product.id} className="products__card">
                <NavLink
                  className="products__card__img"
                  to={`/products/${product.id}`}
                >
                  <img src={product.images[0]} alt="" />
                </NavLink>
                <div className="products__card__info">
                  <h3>${product.price}</h3>
                  <h2>{product.title}</h2>
                  <p>{product.desc}</p>
                  <div className="products__card__info__btns">
                    <button>В корзину</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="products__cards">
            {data?.slice(sliceFrom, sliceTo).map((product) => (
              <div key={product.id} className="products__card">
                <NavLink
                  className="products__card__img"
                  to={`/products/${product.id}`}
                >
                  <img src={product.images[0]} alt="" />
                </NavLink>
                <div className="products__card__info">
                  <h3>${product.price}</h3>
                  <h2>{product.title}</h2>
                  <p>{product.desc}</p>
                  <div className="rating">{getRating(product.rating)}</div>
                  <div className="products__card__info__btns">
                    <button>В корзину</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="products__cards">
            {data?.slice(sliceFrom, sliceTo).map((product) => (
              <div key={product.id} className="products__card">
                <NavLink
                  className="products__card__img"
                  to={`/products/${product.id}`}
                >
                  <img src={product.images[0]} alt="" />
                </NavLink>
                <div className="products__card__info">
                  <h3>${product.price}</h3>
                  <h2
                    
                  >
                    {product.title}
                  </h2>
                  <p>{product.desc}</p>
                  <div className="products__card__info__btns">
                    <button>В корзину</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Products;
