import React from "react";


const Offers = ({ title, color, info, img }) => {
  return (
    <div style={{ background: `${color}` }} className="offer__card">
      <div className="offer__card__left">
        <h2>{title}</h2>
        <p>{info}</p>
      </div>
      <div className="offer__card__right">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Offers;
