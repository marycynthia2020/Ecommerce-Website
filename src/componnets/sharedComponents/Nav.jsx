import { NavLink } from "react-router-dom";
// import { GrServices } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import LikeBtn from "../../Btns/LikeBtn";

const Nav = (props) => {

  return (
    <nav className=" max-w-[1440px] py-2  px-2  pt-8 w-full 2xl:w-[80vw] mx-auto flex flex-col lg:flex-row gap-y-8 md:items-center lg:justify-between justify-center mb-6">
      <div>
        <h1 className="text-2xl font-bold text-center ">Exclusive</h1>
      </div>
      <div className="hidden lg:flex gap-8 items-center justify-between">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
      <div className="flex items-center justify-between md:gap-4 ">
        <div className="bg-[#F5F5F5] flex items-center justify-between text-black py-2 px-2  ">
          <input
            type="text"
            placeholder="what are you looking for?"
            className="text-sm bg-[#F5F5F5] outline-none"
            name="searchProduct"
            onChange={props.handleChange}
            value={props.formData.searchProduct}
          />
          <IoIosSearch className="text-2xl" />
        </div>
        <div className="text-2xl ">
          <LikeBtn />
        </div>
        <div className=" text-2xl">
          <IoCartOutline  onClick={props.toggleShoppingCart}/>
        </div>
        <div>
        <IoPersonOutline className=" text-2xl" onClick={props.toggleProfile} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
