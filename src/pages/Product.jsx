import { Link, useParams, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import useFetch from "../components/home/useFetch";
import Loading from "../components/fetch/Loading";
import ErrorMsg from "../components/fetch/ErrorMsg";
import { useState, useEffect } from "react";
import Slider from "../components/products/Slider";

const Product = () => {
  const [num, setNum] = useState(1);
  const { productId } = useParams();
  const {
    data: product,
    isPending,
    error,
  } = useFetch(`https://cristalux-app.onrender.com/products/${productId}`);
  const [currentProduct, setCurrentProduct] = useState(null);

  // console.log(product);
  console.log(product);
  useEffect(() => {
    if (product) {
      setCurrentProduct(product);
    }
  }, [product]);



  const increase = () => {
    if (num < product.quantity) {
      setNum(num + 1);
    }
  };

  const decrease = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };

  const offerPercentage = product.offer / 100;
  const discountedPrice = product.price * (1 - offerPercentage);

    const dispath = useDispatch();

    const handleAddToCart = (product) => {
      dispath(addToCart(product));
    };
  return (
    <main>
      {isPending && <Loading />}
      {error && <ErrorMsg />}
      {product && (
        <>
        <div>
          <h2>{product.id}</h2>
        </div>
        </>
      )}
    </main>
  );
};

export default Product;
