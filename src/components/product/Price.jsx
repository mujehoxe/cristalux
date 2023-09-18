
const Price = ({ product }) => {
  return (
    <div className="my-4 flex items-center justify-around">
      {product.percentage ? (
        <>
          <h2 className="line-through text-xl">{product.price} da</h2>
          <h2 className="text-xl">{product.price - product.percentage} da</h2>
        </>
      ) : (
        <>
        <h2 className="text-xl">{product.price} da</h2>
        </>
      )}
    </div>
  );
}

export default Price
