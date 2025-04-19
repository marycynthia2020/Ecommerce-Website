import React from 'react'

const ProductBtn = ({handleClick, children, style}) => {
  return (
    <button className="bg-red-400 py-2 px-4 text-white rounded-sm mt-12 block" style={style} onClick={handleClick}>{children}</button>
  )
}

export default ProductBtn