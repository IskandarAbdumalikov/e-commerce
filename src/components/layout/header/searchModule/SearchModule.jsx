import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchModule = () => {
  return (
    <form className="header__nav__left__form" action="">
      <input placeholder="Search product" type="text" />
      <CiSearch />
    </form>
  );
};

export default SearchModule;
