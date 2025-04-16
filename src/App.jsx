import { Route, Routes } from "react-router-dom"
import Account from "./pages/Account"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Nav from "./componnets/Nav"
import ShoppingCart from "./componnets/ShoppingCart"
import { useState } from "react"
import Notification from "./componnets/Notification"


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isNotified, setIsNotified] = useState(false)

  const toggleShowCart = ()=> {
    setIsOpen(prev => !prev)
  }

  const toggleNotification = () => {
    setIsNotified(prev => !prev)
  }



      return (
        <div className='overflow-x-hidden  relative max-w-[1440px] mx-auto bg-red'>
          {isOpen && <ShoppingCart isOpen={isOpen} setIsOpen={setIsOpen} />}
        <Nav toggleShowCart= {toggleShowCart} toggleNotification={toggleNotification}/>
        {isNotified && <Notification />}
        
        <Routes>
          <Route path='/' element={<Account/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
       
        </div>
      )
    }

export default App
