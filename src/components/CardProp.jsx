import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const CardProp = ({
  itemImg,
  itemName,
  itemPrice,
  discountPercentage = 0,
  id,
  total,
  quantity,
}) => {
  const { cartProduct, setCartProduct } = useContext(GlobalContext);
  const [quantityChange, setQuantityChange] = useState(quantity);
  useEffect(() => {
    setQuantityChange(quantity);
  }, [quantity]);
  function deleteOrder(id) {
    const arr = cartProduct.filter((data, i) => i != id);
    setCartProduct(arr);
  }
  function addCart({ itemImg, itemName, discountPercentage, id }) {
    const index = cartProduct.findIndex((data) => data.id === id);
    if (index !== -1) {
      const arr = [...cartProduct];
      arr[index].quantity += 1;
      setCartProduct(arr);
    } else {
      setCartProduct([
        ...cartProduct,
        {
          thumbnail: itemImg,
          title: itemName,
          price: itemPrice,
          discountPercentage,
          quantity: 1,
          id,
        },
      ]);
    }
  }

  function editQuantity(id) {
    // const arr = [...cartProduct];
    // arr[id].quantity=quantityChange;
    // setCartProduct(arr);
  }

  return (
    <div
      className={` min-h-[10vh] h-fit grid ${
        total ? "grid-cols-7" : "grid-cols-5"
      } justify-center w-full items-center bg-slate-100 p-4 rounded-lg`}
    >
      <img
        src={itemImg}
        alt=""
        className=" object-cover h-[80px] rounded-lg w-[80px]"
      />
      <h1>{itemName}</h1>
      <p>₹{itemPrice}</p>
      <p>{discountPercentage}%</p>
      {quantityChange && (
        <input
          value={quantityChange}
          onChange={(e) => {
            if (e.target.value <= 0) {
              if (quantityChange == 1) {
                setQuantityChange(1);
              } else {
                setQuantityChange(quantityChange - 1);
              }
            } else {
              setQuantityChange(e.target.value);
              editQuantity(id);
            }
          }}
          type="number"
          className="w-4 no-spinner bg-transparent border-b border-secondary text-center outline-none"
        ></input>
      )}
      {total && (
        <p>
          ₹
          {(
            quantityChange * itemPrice -
            (itemPrice * discountPercentage) / 100
          ).toFixed(2)}
        </p>
      )}
      <button
        className="bg-primary py-2 rounded-lg border-2 border-secondary hover:bg-transparent"
        onClick={() => {
          total
            ? deleteOrder(id)
            : addCart({
                itemImg,
                itemName,
                discountPercentage,
                id,
              });
        }}
      >
        {total ? "Delete" : "Order"}
      </button>
    </div>
  );
};
