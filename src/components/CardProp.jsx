import React from "react";

export const CardProp = ({
  itemImg,
  itemName,
  itemPrice,
  discountPercentage = 0,
}) => {
  return (
    <div className=" h-[10vh] grid grid-cols-5 w-full">
      <img src={itemImg} alt="" className="h-full object-cover" />
      <h1>{itemName}</h1>
      <p>₹{itemPrice}</p>
      <p>{discountPercentage}%</p>
    </div>
  );
};
