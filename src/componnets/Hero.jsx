import React from "react";
import HeroImage from "/hero.png"
const Hero = () => {
  return (
    <div className="mb-16 lg:mb-32 max-w-[1440px] py-2 px-2 w-full 2xl:w-[80vw] mx-auto grid lg:grid-cols-12 grid-rows-12  gap-4">
      <div  className="col-span-3 row-span-12 ">
        <ul className=" h-full flex flex-col justify-between text-lg gap-3">
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
      <div className="col-span-9 row-span-12">
        <img src={HeroImage} alt="hero image"className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
