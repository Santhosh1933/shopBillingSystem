import React, { useContext, useEffect, useState } from "react";
import { Cart } from "./Cart";
import { CardProp } from "./CardProp";
import { GlobalContext } from "./GlobalContext";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterName, setFilterName] = useState("");
  async function fetchProduct() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
    setFilteredProducts(data.products);
  }
  useEffect(() => {
    fetchProduct();
  }, []);
  useEffect(() => {
    const filteredArr = products.filter((data) =>
      data.title.toLowerCase().includes(filterName.toLowerCase())
    );
    setFilteredProducts(filteredArr);
  }, [filterName, products]);
  return (
    <div className="lg:w-[95%] w-full lg:h-[80vh] mx-auto flex flex-col lg:flex-row justify-center ">
      <div className="lg:w-[40%] w-full border-x border-b p-10 min-h-[70vh] flex flex-col gap-8">
        <div className="flex gap-6 flex-col md:w-2/4 lg:w-2/4">
          <h1 className="secondary-tit text-2xl text-secondary">Products</h1>
          <input
            type="text"
            placeholder="Search product..."
            className="outline-none border-b-2 border-secondary py-2"
            onChange={(e) => {
              setFilterName(e.target.value.trim());
            }}
          />
        </div>
        <tr className="grid grid-cols-5 w-full ">
          <td className="secondary-tit">Img</td>
          <td className="secondary-tit">Title</td>
          <td className="secondary-tit">Price</td>
          <td className="secondary-tit">Discount</td>
          <td className="secondary-tit">Place Order</td>
        </tr>

        <table className=" overflow-y-scroll flex flex-col gap-4 h-[50vh] ">
          {filteredProducts.length > 0
            ? filteredProducts.map((data, i) => (
                <tr>
                  <CardProp
                    key={i}
                    itemName={data.title}
                    itemImg={data.thumbnail}
                    itemPrice={data.price}
                    discountPercentage={data.discountPercentage}
                    id={i}
                  />
                </tr>
              ))
            : "No Products"}
        </table>
      </div>
      <div className="lg:w-2/4 w-full ">
        <Cart />
      </div>
    </div>
  );
};
