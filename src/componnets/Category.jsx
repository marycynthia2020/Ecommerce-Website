import React, { useState } from "react";
import RedDiv from "./RedDiv";
import ScrollBtn from "../Btns/ScrollBtn";
import { category } from "./dummyData/categoryData";
import { shoes } from "./dummyData/shoeApi";
import ProductBtn from "../Btns/ProductBtn";
import LikeBtn from "../Btns/LikeBtn";
import star from "/star.png";

const Category = () => {
  const [categories, setCategories] = useState(category);
  const [products, setProducts] = useState([]);

  const showCategories = () => {
    setCategories(category);
    setProducts([]);
  };

  const showFirst8 = () => {
    const first8 = shoes.filter(item => item.id <= 8);
    setProducts(first8);
    setCategories([]);
  };
  const showAllProducts = () => {
    setCategories([]);
    setProducts(shoes);
  };

  const handleClick = title => {
    category.filter(item => {
      if (item.title === title) {
        const foundProducts = shoes.filter(item =>
          item.title.toLowerCase().includes(title.toLowerCase())
        );
        if (foundProducts) {
          setProducts(foundProducts);
          setCategories([]);
        }
      }
    });
  };

  return (
    <div className=" max-w-[1440px] px-2 w-full 2xl:w-[80vw] mx-auto  mb-16 lg:mb-20">
      <RedDiv children={"Categories"} />
      <div className="flex items-center justify-between mb-6">
        <h2 className="md:text-4xl font-medium border-b">
          Browse By Categories
        </h2>
        <ScrollBtn
          handleLeftClick={showCategories}
          handleRightClick={showFirst8}
        />
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6  ">
        {categories.map(item => (
          <div
            className="p-4 w-[130px] h-[130px] md:w-[150px] md:h-[150px] "
            key={item.id}
            onClick={() => handleClick(item.title)}
          >
            <img src={item.image} alt="product" className="w-full h-full" />
          </div>
        ))}
      </div>
      <div className=" grid grid-cols-1 lg-grid-cols-2 xl:grid-cols-4 gap-6">
        {products.map(item => (
          <div
            key={item.id}
            className="p-4 flex flex-col gap-2 justify-between border relative"
          >
            <div className="self-center w-[200x] h-[160px] ">
              <img
                src={item.images[1]}
                alt="product"
                className="w-full h-full"
              />
            </div>
            <LikeBtn className={"absolute right-5"} />
            <p className="text-xl">{item.title}</p>
            <div className="flex gap-2 items-center">
              <p className="text-red-700">${item.price}</p>
              <div className="flex gap-1">
                <img src={star} alt="" width={15} height={15} />
                <img src={star} alt="" width={15} height={15} />
                <img src={star} alt="" width={15} height={15} />
                <img src={star} alt="" width={15} height={15} />
                <img src={star} alt="" width={15} height={15} />
              </div>
              <p>({item.id})</p>
            </div>
          </div>
        ))}
      </div>
      <ProductBtn children={"View All"} handleClick={showAllProducts} />
    </div>
  );
};

export default Category;
