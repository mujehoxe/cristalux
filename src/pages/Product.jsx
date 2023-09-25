import { Link, useParams, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useFetch from "../components/home/useFetch";
import Loading from "../components/fetch/Loading";
import ErrorMsg from "../components/fetch/ErrorMsg";
import { useState, useEffect } from "react";
import Slider from "../components/products/Slider";
import ProductImages from "../components/product/ProductImages";
import Price from "../components/product/Price";
import Quantity from "../components/product/Quantity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "../features/cartSlice";
import { addToCartWithQuantity } from "../features/cartSlice";
import LatestProducts from "../sections/home/LatestProducts";
import { toast } from "react-toastify";
import DesktopView from "../components/product/DesktopView";
import Transition from "../components/framerMotion/Transition";
import { motion } from "framer-motion";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1); // Initialize selected quantity
  const { productId } = useParams();


  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Use the new addToCartWithQuantity action with the selected quantity
    try {
      dispatch(addToCartWithQuantity({ product, quantity: selectedQuantity }));
    } catch (e) {
      toast.error(e);
    }
  };

  const navigate = useNavigate();

  const handleBuyNow = () => {
    try {
      dispatch(addToCartWithQuantity({ product, quantity: selectedQuantity }));
    } catch (e) {
      toast.error(e);
      return;
    }
    navigate("/checkout");
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetch(
          `https://cristalux-app.onrender.com/api/v1/products/${productId}`
        );
        const fetchedProduct = await data.json();
        setProduct(fetchedProduct);
      } catch (error) {
        setError(error.message);
      }
    };
    getProduct();
  }, [productId]);

  // Update selectedQuantity when Quantity component changes it
  const handleQuantityChange = (newQuantity) => {
    setSelectedQuantity(newQuantity);
  };

  return (
    <main className="">
      <Transition />
      {error && <ErrorMsg />}
      {product && (
        <div className="lg:hidden">
          <div className="p-2">
            <div className="sm:[80%] md:w-[95%] sm:mx-auto">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-2xl uppercase text-cristaluxBrown font-black"
              >
                {product.name}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-2xl uppercase text-cristaluxBrown font-semibold"
              >
                category:{" "}
                <span className="font-bold">{product.category.name}</span>
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="md:p-4"
            >
              <ProductImages product={product} />
            </motion.div>

            <Price product={product} />
            {product.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-cristaluxBrown sm:text-lg font-medium sm:w-[80%] sm:mx-auto md:text-xl"
              >
                {product.description}
              </motion.p>
            )}
            <Quantity
              product={product}
              selectedQuantity={selectedQuantity} // Pass selectedQuantity as a prop
              onQuantityChange={handleQuantityChange} // Pass a callback to update selectedQuantity
            />
            <div className="my-7 flex items-center justify-center gap-x-4">
              <button
                onClick={handleAddToCart}
                className="text-cristaluxBrown border-2 border-cristaluxBrown px-4 py-2 flex items-center gap-3 rounded-md"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1}}
                >
                  <FontAwesomeIcon className="" icon={faCartShopping} />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="font-semibold capitalize"
                >
                  add to cart
                </motion.span>
              </button>
            </div>
          </div>
          <LatestProducts />
        </div>
      )}
      <DesktopView
        handleAddToCart={handleAddToCart}
        handleBuyNow={handleBuyNow}
        product={product}
        selectedQuantity={selectedQuantity}
        onQuantityChange={handleQuantityChange}
      />
    </main>
  );
};

export default Product;
