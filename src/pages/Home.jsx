import React from 'react'
import Hero from '../componnets/Hero'
import Products from '../componnets/Products'
import ShoeProducts from '../componnets/ShoeProducts'
import Category from '../componnets/Category'

const Home = ({formData}) => {
 
  return (
    <div>
        <Hero />
        <ShoeProducts />
        <Category />
        <Products formData={formData} />
    </div>
  )
}

export default Home