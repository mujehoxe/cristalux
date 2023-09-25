
const Price = ({ product }) => {
  return (
    <div className="my-4 flex justify-between items-center sm:px-20 lg:px-0">
      <h2 className="text-center text-2xl md:text-3xl uppercase text-cristaluxBrown font-bold lg:hidden">
        prix
      </h2>
      <div className="lg:flex lg:gap-5">
        {product.percentage ? (
          <>
            <h2 className="line-through text-xl md:text-2xl lg:text-lg text-red-500 font-light">
              {product.price} da
            </h2>
            <h2 className="text-xl md:text-2xl lg:text-lg text-green-950 font-medium">
              {product.price - (product.price * product.percentage) / 100} da
            </h2>
          </>
        ) : (
          <>
            <h2 className="text-xl md:text-2xl lg:text-lg text-cristaluxBrown font-medium">
              {product.price} da
            </h2>
          </>
        )}
      </div>
    </div>
  );
}

export default Price
