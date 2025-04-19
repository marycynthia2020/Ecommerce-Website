import React from 'react'
import { IoBagHandleOutline } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";
import { FaRegStar } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

const Profile = () => {
  return (
    <div className=" absolute flex flex-col gap-6 top-[5%] right-[0.5%] p-4 w-auto shadow-lg z-30 bg-[#936e96] text-white">
        <div className='flex gap-4 items-center text-sm'>
          <IoPersonOutline className='text-2xl' />
          <span className=''>Manage My Acount</span>
        </div>
        <div className='flex gap-4 items-center text-sm'>
          <IoBagHandleOutline className='text-2xl' />
          <span className=''>My Order</span>
        </div>
        <div className='flex gap-4 items-center text-sm'>
          <ImCancelCircle className='text-2xl' />
          <span className=''>My Cancellations</span>
        </div>
        <div className='flex gap-4 items-center text-sm'>
          <FaRegStar className='text-2xl' />
          <span className=''>MY Reviews</span>
        </div>
        <div className='flex gap-4 items-center text-sm'>
          <CiLogout className='text-2xl' />
          <span className=''>Logout</span>
        </div>
    </div>
  )
}

export default Profile