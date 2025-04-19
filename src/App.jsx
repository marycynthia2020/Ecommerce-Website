import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Nav from "./componnets/sharedComponents/Nav";
import ShoppingCart from "./componnets/ShoppingCart";
import { useState } from "react";
import Profile from "./componnets/Profile";
import Home from "./pages/Home";
import CountDown from "./componnets/CountDown";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [formData, setFormData] = useState({
    searchProduct: "",
  });

  const toggleShoppingCart = () => setIsCartOpen(prev => !prev);

  const toggleProfile = () => setIsProfileOpen(prev => !prev);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="overflow-x-hidden  relative max-w-[1440px] mx-auto ">
      
      {isCartOpen && (
        <ShoppingCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      )}
      <Nav
        toggleShoppingCart={toggleShoppingCart}
        toggleProfile={toggleProfile}
        formData={formData}
        handleChange={handleChange}
      />

      {isProfileOpen && <Profile />}
     
    

      <Routes>
        <Route path="/" element={<Home formData={formData} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
