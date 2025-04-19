import React from 'react'
import Hero from '../componnets/Hero'
import Products from '../componnets/Products'
import ShoeProducts from '../componnets/ShoeProducts'
import Category from '../componnets/Category'
import MusicBox from '../componnets/MusicBox'
import NewArrivals from '../componnets/NewArrivals'

const Home = ({formData}) => {
 
  return (
    <div>
        <Hero />
        <ShoeProducts />
        <Category />
        <MusicBox />
        <Products formData={formData} />
        <NewArrivals />
    
    </div>
  )
}

export default Home