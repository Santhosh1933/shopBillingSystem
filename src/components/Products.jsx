import React, { useEffect, useState } from "react";
import { Cart } from "./Cart";
import { CardProp } from "./CardProp";

export const Products = () => {
  const [products, setProducts] = useState([]);
  async function fetchProduct() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  }
  useEffect(() => {
    fetchProduct();
    console.log(products);
  }, []);

  return (
    <div className="w-full lg:w-[90%] mx-auto flex gap-8 justify-center ">
      <div className="w-2/4 border-x border-b p-10 min-h-[70vh] flex flex-col gap-8">
        <div className="flex gap-6 flex-col md:w-2/4 lg:w-2/4">
          <h1 className="secondary-tit text-2xl text-secondary">Products</h1>
          <input
            type="text"
            placeholder="Search product..."
            className="outline-none border-b-2 border-secondary py-2"
          />
        </div>
        
        <table className="h-[60vh] overflow-y-scroll flex flex-col gap-4 ">
        <tr className="grid grid-cols-5 ">
              <td className="secondary-tit">Img</td>
              <td className="secondary-tit">Title</td>
              <td className="secondary-tit">Price</td>
              <td className="secondary-tit">Discount</td>
          </tr>  
          {products.map((data, i) => (
            <tr>
              <CardProp
                key={i}
                itemName={data.title}
                itemImg={data.thumbnail}
                itemPrice={data.price}
                discountPercentage={data.discountPercentage}
              />
            </tr>
          ))}
        </table>
      </div>
      <div className="w-2/4 ">
        <Cart />
      </div>
    </div>
  );
};
