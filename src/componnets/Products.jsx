import React, { useState } from "react";
import { data } from "./Data";
import star from "/star.png"
import Love from "./Love";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";



const Products = () => {
    const initialProducts =  data.filter(item => {
        if(item.id <= 8) {
            return item
        }
    })

    const [productsData, setProductsData] = useState(initialProducts)

    const showSecond16 = () => {
       const second=  data.filter(item => {
        if(item.id > 8 && item.id <=16) {
            return item
        }
        })
        setProductsData(second)
    }
    const showfirst8 = () => {
        setProductsData(initialProducts)
    }
    const showAll = () => {
        setProductsData(data)
    }

  return (
    <div className=" max-w-[1440px] px-2 w-full 2xl:w-[80vw] mx-auto font-semibold mb-6 ">
        <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold">Explore Our Products</h2>
            <div className="flex gap-2 items-center text-3xl">
                <FaArrowLeft  onClick={showfirst8} />
                <FaArrowRight  onClick={showSecond16}/>
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
            <Love />
            <p className="text-xl">{item.category}</p>
            <div className="flex gap-2 items-center">
              <p className="text-red-700">${item.price}</p>
              <div className="flex gap-1">
                    <img src={star} alt="" width={15} height={15}/>
                    <img src={star} alt="" width={15} height={15}/>
                    <img src={star} alt="" width={15} height={15}/>
                    <img src={star} alt="" width={15} height={15}/>
                    <img src={star} alt="" width={15} height={15}/>  
              </div>
              <p>({item.rating.count})</p>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-red-400 py-2 px-4 text-white" onClick={showAll}>View More</button>
    </div>
  );
};

export default Products;
