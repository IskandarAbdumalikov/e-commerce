import React, { useEffect, useState } from "react";
import "./header.scss";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { LuBox } from "react-icons/lu";
import avatar from "../../../assets/avatar.svg";

const Header = () => {
  let [showCategoryList, setShowCategoryList] = useState(false);
  return (
    <header className="header">
      <nav className="header__nav container">
        <h1 className="header__nav__logo">
          <img
            width={70}
            src="https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png"
            alt=""
          />
        </h1>
        <div className="header__nav__category__selector">
          <button
            onMouseEnter={() => setShowCategoryList(true)}
            onMouseLeave={() => setShowCategoryList(false)}
          >
            <FaBars />
            category
          </button>
          {showCategoryList ? (
            <div className="categories__list">Bu yerga categorylar chiqadi</div>
          ) : (
            <></>
          )}
        </div>
        <form action="" className="header__nav__search__form">
          <input placeholder="Search product" type="text" />
          <button>
            <CiSearch />
          </button>
        </form>
        <ul className="header__nav__list">
          <div className="likes">
            <CiHeart />
            <h3>LIKES</h3>
          </div>
          <div className="products">
            <LuBox />
            <h3>PRODUCTS</h3>
          </div>
          <div className="box">
            <CiShoppingCart />
            <h3>CART</h3>
          </div>
        </ul>
        <div className="header__nav__avatar">
          <img src={avatar} alt="" />
          <h1>ISKANDAR</h1>
        </div>
      </nav>
    </header>
  );
};

export default Header;
