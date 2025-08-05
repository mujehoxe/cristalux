import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartWithQuantity, getTotal } from "../../features/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ProductCard = ({ product, size, lineClamp }) => {
  const { t } = useTranslation();
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const discount = product.percentage;

  const dispatch = useDispatch();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAddToCart = (product) => {
    dispatch(
      addToCartWithQuantity({ product, quantity: selectedQuantity + 1 })
    );
    dispatch(getTotal());
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer ${size}`}
    >
      <div className="relative bg-cristaluxBrown h-[65%]  w-full">
        <img
          className="w-full h-full object-cover"
          src={"/" + product.thumbnail}
          alt=""
        />
        {discount !== null && discount !== 0 && (
          <div className="absolute top-0 right-0 p-2 bg-black text-white font-bold rounded-bl-[50%]">
            {discount}%
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-red-300 overlay">
          <button
            onClick={() => handleAddToCart(product)}
            className="px-6 py-2 font-bold bg-cristalux rounded-lg hover:bg-yellow-500 transition-colors duration-300"
          >
            {t('products.addToCart')}
          </button>
        </div>
      </div>
      <div className="py-3 px-4 lg:py-4 relative h-[35%]  ">
        <div className="absolute right-0 top-0 w-[40px] h-[40px] bg-cristaluxBrown flex items-center justify-center lg:hidden">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-white"
            onClick={() => handleAddToCart(product)}
          />
        </div>
        <h2 className="text-xl sm:w-[90%] xs2:text-sm sm:text-xl font-bold w-[90%] xs:w-[80%]">
          {product.name}
        </h2>
        <div className="py-2">
          <p className={`${lineClamp}  text-sm text-gray-600  w-[90%]`}>
            {product.description && product.description}
          </p>
        </div>
        <div className="mt-2 flex justify-between  items-center">
          <h3 className="text-sm font-bold xs:text-base xs2:text-sm sm:text-base ">
            {product.price} DA
          </h3>
          <Link
            className="text-sm xs:text-base xs2:text-sm sm:text-base bg-cristaluxBrown text-white px-6 py-2 xs:py-2 xs:px-2 rounded-md"
            to={`/products/${product.id}`}
            onClick={scrollToTop}
          >
            {t('products.viewDetails')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
