import React from 'react'
import RedDiv from './RedDiv'
import playstation from "/playstation.png"
import womencollection from "/womencollection.png"
import musicplayer from "/musicplayer.png"
import perf from "/perf.png"
import customer from "/customer.png"

const NewArrivals = () => {
  return (
    <div className=" max-w-[1440px] px-2 w-full 2xl:w-[80vw] mx-auto  mb-16 lg:mb-20">
        <RedDiv children={"Featured"} />
        <h2 className="md:text-4xl font-medium mb-16">New Arrivals</h2>
        <div className='grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-12 gap-4 lg:h-[600px] mb-20'>
            <div className='lg:col-span-6 lg:row-span-12'>
                <img src={playstation} alt="playstation" className='w-full h-full'/>
            </div>
            <div className='lg:col-span-6 lg:row-span-6 bg-blue-600'>
                <img src={womencollection} alt="" className='w-full h-full'/>
            </div>
            <div className='lg:col-span-3 lg:row-span-6 w-full'>
                <img src={musicplayer} alt="" className='w-full h-full'/>
            </div>
            <div className='lg:col-span-3 lg:row-span-6 '>
                <img src={perf} alt="" className='w-full h-full'/>
            </div>
        </div>
        <div className='w-full lg:w-3/5 mx-auto'>
            <img src={customer} alt="" />
        </div>

    </div>
  )
}

export default NewArrivals