import React from 'react'
import music from "/musicBox.png"

const MusicBox = () => {
  return (
    <div className=" max-w-[1440px] px-2 w-full 2xl:w-[80vw] mx-auto  mb-16 lg:mb-20 lg:h-[500px]">
        <img src={music} alt="" className='w-full h-full '/>
    </div>
  )
}

export default MusicBox