import React from "react";
import qrcode from "/qrcode.png"
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { SiYoutubemusic } from "react-icons/si";
import sendbtn from "/sendbtn.png"


const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-10">
        <div className="max-w-[1440px] px-2  w-full 2xl:w-[80%]  mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 cursor-pointer opacity-80">
        <div className="">
        <h3 className="text-2xl font-bold mb-4">Exclusive</h3>
        <p  className="font-bold mb-4">Subscribe</p >
        <p className="mb-4" >Get 10% off your first order</p >
        <div className="w-[215px] flex border-2 gap-1 border-white p-2 text-white items-center">
            <input type="text"  placeholder="Enter your email" className="outline-none w-full bg-transparent mb-8"/>
            <img src={sendbtn} alt="" width={20}/>
        </div>

      </div>

      <ul>
        <li className=" font-bold mb-4">Support</li>
        <li className=" mb-1">111 Bijay sarani Dhaka,</li>
        <li className=" mb-4">DH 1515, Bangladesh.</li>
        <li className=" mb-4">exclusive@gmail.com</li>
        <li className=" mb-8">+4444-8888-48884</li>
        
      </ul>

      <ul>
      <li className=" font-bold mb-4">Account</li>
      <li className=" mb-4">My Account</li>
      <li className=" mb-4">Login / Register</li>
      <li className=" mb-4">Promotions</li>
      <li className=" mb-4">Cart</li>
      <li className=" mb-4">Wishlist</li>
      <li className=" mb-8">Shop</li>
      </ul>

      <ul>
      <li className=" font-bold mb-4">Quick Link</li>
      <li className=" mb-4">Privacy Policy</li>
      <li className=" mb-4">Terms Of Use</li>
      <li className=" mb-4">FAQ</li>
      <li className=" mb-8">Contact</li>
      
      </ul>
      <div>
            <p className="mb-4 font-bold">Download App</p>
            <p className="mb-4 text-sm">Save s3 with App now user Only</p>
            <img src={qrcode} alt="grcode, playstotre, apple store" className="mb-4" />
            <div className="flex  items-center gap-3 text-4xl text-white">
                <FaFacebook />
                <AiFillTwitterCircle />
                <RiInstagramFill />
                <SiYoutubemusic/>
            </div>
      </div>
        </div>
    </footer>
  );
};

export default Footer;
