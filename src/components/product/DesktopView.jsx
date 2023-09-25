import ProductImages from "./ProductImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import Price from "./Price";
import Quantity from "./Quantity";
import LatestProducts from "../../sections/home/LatestProducts";
import { motion } from "framer-motion";


const DesktopView = ({ product, onQuantityChange, selectedQuantity, handleAddToCart, handleBuyNow }) => {
  return (
    <>
      <div className="hidden lg:block w-[94%] mx-auto py-5">
        {product && (
          <div className="p-2">
            <div className="">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-2xl uppercase text-cristaluxBrown font-black"
              >
                {product.name}
              </motion.h1>
            </div>
            <div className="flex">
              <ProductImages product={product} />
              <div className="p-5">
                <h2 className="text-2xl capitalize text-cristaluxBrown font-semibold">
                  {product.name}
                </h2>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1}}
                  className="flex items-center gap-x-2 py-2 text-yellow-500"
                >
                  <FontAwesomeIcon icon={faStar} className="" />
                  <FontAwesomeIcon icon={faStar} className="" />
                  <FontAwesomeIcon icon={faStar} className="" />
                  <FontAwesomeIcon icon={faStar} className="" />
                  <FontAwesomeIcon icon={faStar} className="" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1}}
                >
                  <Price product={product} />
                </motion.div>

                {product.description && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-cristaluxBrown sm:text-lg font-medium sm:w-[80%] lg:w-[60%] lg:mx-0 lg:text-base sm:mx-auto md:text-xl"
                  >
                    {product.description}
                  </motion.p>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Quantity
                    selectedQuantity={selectedQuantity}
                    product={product}
                    onQuantityChange={onQuantityChange}
                  />
                </motion.div>

                <div className="my-7 flex items-center justify-center lg:justify-start gap-x-4">
                  <motion.button
                    onClick={handleAddToCart}
                    className="text-cristaluxBrown border-2 border-cristaluxBrown px-4 py-2 flex items-center gap-3 rounded-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <FontAwesomeIcon className="" icon={faCartShopping} />
                    <span className="font-semibold capitalize">
                      add to cart
                    </span>
                  </motion.button>
                  <motion.button
                    onClick={handleBuyNow}
                    className="uppercase text-cristalux font-semibold bg-cristaluxBrown py-2 px-6 rounded-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    buy now
                  </motion.button>
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
      <div className="hidden lg:block">
        <LatestProducts />
      </div>
    </>
  );
};

export default DesktopView
