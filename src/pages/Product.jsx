import { Link, useParams, Outlet } from "react-router-dom";
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

const Product = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1); // Initialize selected quantity
  const { productId } = useParams();

  const dispatch = useDispatch();

const handleAddToCart = () => {
  // Use the new addToCartWithQuantity action with the selected quantity
  dispatch(addToCartWithQuantity({ product, quantity: selectedQuantity }));
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
    <main className="xs:bg-red-300 xs2:bg-red-500 sm:bg-red-950 md:bg-green-300">
      {error && <ErrorMsg />}
      {product && (
        <>
          <div className="p-4">
            <h1 className="text-xl">
              {product.category.name}/{product.name}
            </h1>
            <ProductImages product={product} />
            <Price product={product} />
            {product.description && <p>{product.description}</p>}
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
                <FontAwesomeIcon className="" icon={faCartShopping} />
                <span className="font-semibold capitalize">add to cart</span>
              </button>
              <button
                onClick={handleAddToCart}
                className="uppercase text-cristalux font-semibold bg-cristaluxBrown py-2 px-6 rounded-md"
              >
                buy now
              </button>
            </div>
          </div>
            <LatestProducts />
        </>
      )}
    </main>
  );
};

export default Product;
