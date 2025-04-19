import React from "react";
import HeroImage from "/hero.png"
const Hero = () => {
  return (
    <div className="mb-16 lg:mb-20 max-w-[1440px] py-2 px-2 w-full 2xl:w-[80vw] mx-auto grid lg:grid-cols-12  gap-4">
      <div  className="lg:col-span-3 col-span-12 ">
        <ul className=" h-full grid grid-cols-2 sm:grid-cols-3  gap-3 lg:grid-cols-1  text-lg  w-full ">
            <li>Woman's Fashion</li>
            <li>Men's fashion</li>
            <li>Electronics</li>
            <li>home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & outdoor</li>
            <li>Baby & Toy's</li>
            <li>Groceries</li>
            <li>Health</li>
        </ul>
      </div>
      <div className=" col-span-12 lg:col-span-9 ">
        <img src={HeroImage} alt="hero image"className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
