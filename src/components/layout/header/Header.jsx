import React, { useEffect, useState } from "react";
import "./header.scss";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { LuBox } from "react-icons/lu";
import avatar from "../../../assets/images/avatar.svg";
import x from "../../../assets/icons/x.svg";
import { Link, NavLink } from "react-router-dom";
import SearchModule from "./searchModule/SearchModule";
import Dropdown from "./dropdown/Dropdown";
import { useGetParamsProductsQuery } from "../../../features/apiSlice";

const Header = () => {
  let [showCategoryList, setShowCategoryList] = useState(false);
  const [searchValue, setSearchValue] = useState(``);
  const { data } = useGetParamsProductsQuery({ title: searchValue });

  return (
    <header className="header">
      <nav className="header__nav container">
        <Link to={"/"} className="header__nav__logo">
          <img
            src="https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png"
            alt=""
          />
        </Link>
        <div className="show__form">
          <form className="header__nav__left__show__form" action="">
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search product"
              type="text"
              value={searchValue}
            />
            <CiSearch />
          </form>
        </div>

        <div className="header__nav__left">
          <button
            onClick={() => setShowCategoryList((p) => !p)}
            className="category__selector-btn"
          >
            {showCategoryList ? (
              <img className="x-image" src={x} />
            ) : (
              <FaBars />
            )}
            <h3>Category</h3>
          </button>
          <form className="header__nav__left__form" action="">
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              placeholder="Search product"
              type="text"
            />
            <CiSearch />
          </form>
          <div className="header__nav__left__list">
            <NavLink to={"likes"} className="header__nav__left__list__item">
              <CiHeart />
              <h3>Likes</h3>
            </NavLink>
            <NavLink to={"/products"} className="header__nav__left__list__item">
              <LuBox />
              <h3>products</h3>
            </NavLink>
            <NavLink to={"/cart"} className="header__nav__left__list__item">
              <CiShoppingCart />
              <h3>Cart</h3>
            </NavLink>
          </div>
          <div className="header__nav__left__profile">
            <img src={avatar} alt="" />
            <h3>Iskandar</h3>
          </div>
        </div>
      </nav>
      {showCategoryList && searchValue === "" ? <Dropdown /> : <></>}
      {searchValue ? (
        <SearchModule data={data} setSearchValue={setSearchValue} />
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
