import React, { useState } from 'react'
import RedDiv from './RedDiv'
import {shoes} from "./dummyData/shoeApi"
import CountDown from './CountDown'
import ScrollBtn from '../Btns/ScrollBtn'
import LikeBtn from '../Btns/LikeBtn'
import star from "/star.png";
import ProductBtn from '../Btns/ProductBtn'

const ShoeProducts = () => {
    const ProdcutsOnLoading = shoes.filter(item => item.id <=4)
    const [products, setProducts] = useState(ProdcutsOnLoading)

    const showFirst4 = ()=> setProducts(ProdcutsOnLoading)
    const showSecond4 = ()=> {
        const second4 = shoes.filter(item => item.id <=8 && item.id >4)
        setProducts(second4)
    }

    const showAllProducts = ()=> setProducts(shoes)

  return (
    <div className=" max-w-[1440px] px-2 w-full 2xl:w-[80vw] mx-auto  mb-16 lg:mb-32" >
        <RedDiv children={"Today's"} />
        <div className='flex items-center justify-between mb-6'>
            <CountDown />
            <ScrollBtn handleLeftClick={showFirst4} handleRightClick={showSecond4} />
        </div>
        <div className=" grid grid-cols-1 lg-grid-cols-2 xl:grid-cols-4 gap-6">
        {products.map(item => (
          <div
            key={item.id}
            className="p-4 flex flex-col gap-2 justify-between border relative"
          >
            <div className="self-center w-[200x] h-[160px] ">
              <img src={item.images[1]} alt="product" className="w-full h-full" />
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
        <ProductBtn children={"View All Products"} style={{marginInline: "auto"}} handleClick={showAllProducts}/>
    </div>
  )
}

export default ShoeProducts