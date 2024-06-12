import React from "react";
import { useGetCategoriesQuery } from "../../../../features/categoryApi";

const Dropdown = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery();
  console.log(categories);

  return (
    <div className="dropdown__module">
      <div className="dropdown__card">
        <img
          src="https://s3-us-west-2.amazonaws.com/imgds360live/storefront/3545396/1586365076.png"
          alt=""
        />
        <h2>All</h2>
      </div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        categories?.map((category) => (
          <div key={category.id} className="dropdown__card">
            <img src={category.img} alt="" />
            <h2>{category.name}</h2>
          </div>
        ))
      )}
    </div>
  );
};

export default Dropdown;
