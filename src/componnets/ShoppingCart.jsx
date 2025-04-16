import React from "react";

const ShoppingCart = ({isOpen, setIsOpen}) => {
    const toggleIsOpen = () => {
        setIsOpen(prev => !prev)
    }
    
    
  return isOpen?  <div className=" p-4 w-[80vw] sm:w-[40vw]  lg:w-[30vw] 2xl:w-[20vw]  shadow-lg min-h-screen fixed right-0 bg-white z-40 ">
  <div className="text-xl lg:text-2xl font-medium flex items-center justify-between mb-6">
    <h2>Shopping Cart</h2>
    <button onClick={toggleIsOpen}>X </button>
  </div>

</div>: null
};

export default ShoppingCart;
