import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartWithQuantity, getTotal } from "../../features/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ProductCard = ({ product, size }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const discount = product.percentage;


  

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
     dispatch(addToCartWithQuantity({ product, quantity: selectedQuantity }));
    dispatch(getTotal());
  };

  // w-[260px] h-[420px] xs2:w-[300px] xs2:h-[460px] md:h-[420px]

  return (
    <div
      className={`bg-white rounded-lg  shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer ${size}`}
    >
      <div className="relative bg-red-300  h-[65%]">

        {discount !== null && (
          <div className="absolute top-0 right-0 p-2 bg-black text-white font-bold rounded-bl-[50%]">
            {discount}%
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-red-300 overlay">
          <button
            onClick={() => handleAddToCart(product)}
            className="px-6 py-2 font-bold bg-cristalux rounded-lg hover:bg-yellow-500 transition-colors duration-300"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
      <div className="py-7 px-4 lg:py-4 relative h-[35%]">
        <div className="absolute right-0 top-0 w-[40px] h-[40px] bg-cristaluxBrown flex items-center justify-center lg:hidden">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-white"
            onClick={() => handleAddToCart(product)}
          />
        </div>
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-sm text-gray-600 text-ellipsis overflow-hidden">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <h3 className="text-base font-bold">{product.price} DA</h3>
          <Link
            className="ml-2 text-xs xs2:px-0 md:px-4 px-4 py-2 font-bold bg-cristaluxBrown text-white rounded-lg hover:bg-yellow-500 transition-colors duration-300"
            to={`/products/${product.id}`}
          >
            Voir les détails
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
