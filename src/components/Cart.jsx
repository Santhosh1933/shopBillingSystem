import React, { useCallback, useContext, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { CardProp } from "./CardProp";

export const Cart = () => {
  const context = useContext(GlobalContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(context.cartProduct);
  }, [context.cartProduct]);
  return (
    <div className="w-full h-[80vh] mx-auto flex gap-8 justify-center ">
      <div className=" border-x border-b p-10 min-h-[70vh] flex flex-col gap-8">
        <div className="flex gap-6 flex-col md:w-2/4 lg:w-2/4">
          <h1 className="secondary-tit text-2xl text-secondary">Orders</h1>
        </div>
        <tr className="grid grid-cols-7 w-full border-b-2 py-2 ">
          <td className="secondary-tit">Img</td>
          <td className="secondary-tit">Title</td>
          <td className="secondary-tit">Price</td>
          <td className="secondary-tit">Discount</td>
          <td className="secondary-tit">Quantity</td>
          <td className="secondary-tit">Total Price</td>
          <td className="secondary-tit">Delete Order</td>
        </tr>

        <table className=" overflow-y-scroll flex flex-col gap-4 h-[50vh]">
          {products.map((data, i) => (
            <tr>
              <CardProp
                key={i}
                itemName={data.title}
                itemImg={data.thumbnail}
                itemPrice={data.price}
                discountPercentage={data.discountPercentage}
                id={i}
                total={true}
                quantity={data.quantity}
              />
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
