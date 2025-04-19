import React from 'react'

const RedDiv = ({children}) => {
  return (
    <div className='flex items-center gap-3 text-red-600 mb-5'>
        <div className='bg-red-600 rounded-sm h-8 w-4'></div>
        <p>{children}</p>
    </div>
  )
}

export default RedDiv