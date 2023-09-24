import ProductImages from "./ProductImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import Price from "./Price";
import Quantity from "./Quantity";
import LatestProducts from "../../sections/home/LatestProducts";


const DesktopView = ({ product, onQuantityChange, selectedQuantity, handleAddToCart, handleBuyNow }) => {
  return (
    <>
      <div className="hidden lg:block w-[94%] mx-auto py-5">
        {product && (
          <div className="p-2">
            <div className="">
              <h1 className="text-2xl uppercase text-cristaluxBrown font-black">
                {product.name}
              </h1>
            </div>
            <div className="flex">
              <ProductImages product={product} />
              <div className="p-5">
                <h2 className="text-2xl capitalize text-cristaluxBrown font-semibold">
                  {product.name}
                </h2>
                <div className="flex items-center gap-x-2 py-2 text-yellow-500">
                  <FontAwesomeIcon icon={faStar} className="" />
                  <FontAwesomeIcon icon={faStar} className="" />
                  <FontAwesomeIcon icon={faStar} className="" />
                  <FontAwesomeIcon icon={faStar} className="" />
                  <FontAwesomeIcon icon={faStar} className="" />
                </div>
                <Price product={product} />
                {product.description && (
                  <p className="text-cristaluxBrown sm:text-lg font-medium sm:w-[80%] lg:w-[60%] lg:mx-0 lg:text-base sm:mx-auto md:text-xl">
                    {product.description}
                  </p>
                )}
                <div>
                  <Quantity
                    selectedQuantity={selectedQuantity}
                    product={product}
                    onQuantityChange={onQuantityChange}
                  />
                </div>
                <div className="my-7 flex items-center justify-center lg:justify-start gap-x-4">
                  <button
                    onClick={handleAddToCart}
                    className="text-cristaluxBrown border-2 border-cristaluxBrown px-4 py-2 flex items-center gap-3 rounded-md"
                  >
                    <FontAwesomeIcon className="" icon={faCartShopping} />
                    <span className="font-semibold capitalize">
                      add to cart
                    </span>
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="uppercase text-cristalux font-semibold bg-cristaluxBrown py-2 px-6 rounded-md"
                  >
                    buy now
                  </button>
                </div>
                <div>
                  <h2 className="text-2xl uppercase text-cristaluxBrown font-semibold">
                    category:{" "}
                    <span className="font-bold">{product.category.name}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <LatestProducts />
    </>
  );
};

export default DesktopView
