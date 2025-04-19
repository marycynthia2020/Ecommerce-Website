import React, { useEffect, useState } from "react";
import { data } from "./dummyData/Data";
import star from "/star.png";
import ProductBtn from "../Btns/ProductBtn";
import LikeBtn from "../Btns/LikeBtn";
import RedDiv from "./RedDiv";
import ScrollBtn from "../Btns/ScrollBtn";


const Products = ({ formData }) => {
  const initialProducts = data.filter(item => {
    if (item.id <= 8) {
      return item;
    }
  });

  const [productsData, setProductsData] = useState(initialProducts);

    useEffect(()=>{
      if (formData.searchProduct) {
        const foundProducts = data.filter(item =>
          item.category.includes(formData.searchProduct.toLowerCase())
        )
        setProductsData(foundProducts);
        return
      } else{
        setProductsData(initialProducts)
      }
    }, [formData.searchProduct])

    

  const showSecond8 = () => {
    const second = data.filter(item => item.id > 8 && item.id <= 16);
    setProductsData(second);
  };

  const showFirst8 = () => {
    setProductsData(initialProducts);
  };
  const showAllProducts = () => {
    setProductsData(data);
  };

  return (
    <div className=" max-w-[1440px] px-2 w-full 2xl:w-[80vw] mx-auto  mb-6 ">
      <RedDiv children={"Our Prodcuts"}/>
      <div className="flex  justify-between items-center mb-16">
        <h2 className="md:text-4xl font-medium ">Explore Our Products</h2>
        <div className="flex gap-2 items-center">
          <ScrollBtn handleLeftClick={showFirst8} handleRightClick={showSecond8} />
        </div>
      </div>
      <div className=" grid grid-cols-1 lg-grid-cols-2 xl:grid-cols-4 gap-6  ">
        {productsData.map(item => (
          <div
            key={item.id}
            className="p-4 flex flex-col gap-2 justify-between border relative"
          >
            <div className="self-center w-[200x] h-[160px] ">
              <img src={item.image} alt="product" className="w-full h-full" />
            </div>
            <LikeBtn className={"absolute right-5"} />
            <p className="text-xl">{item.category}</p>
            <div className="flex gap-2 items-center">
              <p className="text-red-700">${item.price}</p>
              <div className="flex gap-1">
                <img src={star} alt="" width={15} height={15} />
                <img src={star} alt="" width={15} height={15} />
                <img src={star} alt="" width={15} height={15} />
                <img src={star} alt="" width={15} height={15} />
                <img src={star} alt="" width={15} height={15} />
              </div>
              <p>({item.rating.count})</p>
            </div>
          </div>
        ))}
      </div>
      <ProductBtn
        handleClick={showAllProducts}
        children={"View All Products"}
        style={{ marginInline: "auto" }}
      />
    </div>
  );
};

export default Products;
