import React, { useState } from "react";

const ProductImages = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(
    product ? product.thumbnail : null
  );

  const handleImagesChange = (imageUrl) => {
    setSelectedImage(imageUrl);
  };
  return (
    <div className="w-full lg:w-[60%] lg:h-[500px] lg:mx-0 sm:w-[80%] md:w-full md:h-[650px] mx-auto  border-black my-5 bg-cristaluxBrown p-2 md:p-4 flex flex-col md:flex-row md:items-start md:gap-x-5 items-center gap-1 rounded-md shadow-md">
      <div className="w-full  h-[300px] xs:h-[400px] md:h-full">
        <img
          className="w-full h-full object-cover rounded-md shadow-md"
          src={product.thumbnail}
          alt={product.name}
        />
      </div>
      <div className="w-full lg:w-[30%] md:w-[30%] md:gap-y-2 h-[100px] xs:h-[120px] md:h-full  flex justify-center items-center gap-x-1 md:flex-col md:items-start">
        {product.images &&
          product.images.map((image, index) => (
            <img
              key={index}
              className={`${
                selectedImage === image ? "border-2 border-cristalux " : ""
              } lg:cursor-pointer w-[24%] h-[80%] md:w-full md:h-[24%] object-cover rounded-md`}
              src={image}
              alt={product.name}
              onClick={() => handleImagesChange(image)}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductImages;
