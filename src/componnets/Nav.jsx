import { NavLink } from "react-router-dom";
import { GrServices } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

const Nav = (props) => {
  return (
    <nav className="max-w-[1440px] py-2 px-2 w-full 2xl:w-[80vw] mx-auto flex flex-col lg:flex-row gap-y-8 items-center lg:justify-between justify-center mb-6">
      <div>
        <h1 className="text-2xl font-bold ">Exclusive</h1>
      </div>
      <div className="hidden lg:flex gap-8 items-center justify-between">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="bg-[#F5F5F5] flex lg:items-center justify-between text-black py-2  px-4 ">
          <input
            type="text"
            placeholder="search for a product"
            className="text-sm bg-[#F5F5F5] outline-none"
          />
          <IoIosSearch className="text-2xl" />
        </div>
        <div className="text-2xl p-3 ">
          <FaRegHeart />
        </div>
        <div className=" text-2xl p-3 ">
          <IoCartOutline  onClick={props.toggleShowCart}/>
        </div>
        <div>
        <IoPersonOutline className=" text-2xl" onClick={props.toggleNotification} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
