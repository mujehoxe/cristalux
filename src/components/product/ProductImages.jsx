import React from 'react'

const ProductImages = ({ product }) => {
  return (
    <div className="w-full border-2 border-black my-5">
      <div className="w-full h-[300px]">
        <img className="w-full h-full object-cover" src="" alt={product.name} />
      </div>
      <div className='w-full bg-red-300 border-2 border-black h-[100px] flex justify-center items-center'>
        {product.images && product.images.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>
    </div>
  );
}

export default ProductImages
