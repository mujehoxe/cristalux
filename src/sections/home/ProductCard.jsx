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
    <div className={`group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${size} h-[500px] flex flex-col`}>
      {/* Image Container */}
      <div className="relative overflow-hidden h-[280px] bg-gradient-to-br from-gray-100 to-gray-200">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={"/" + product.thumbnail}
          alt={product.name}
          loading="lazy"
        />
        
        {/* Discount Badge */}
        {discount !== null && discount !== 0 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white font-bold text-sm px-3 py-1 rounded-full shadow-lg">
            -{discount}%
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart(product);
            }}
            className="bg-cristalux text-gray-800 px-6 py-3 rounded-xl font-accent font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform scale-90 group-hover:scale-100 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faCartShopping} />
            {t('products.addToCart')}
          </button>
        </div>
        
        {/* Mobile Add to Cart Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart(product);
          }}
          className="lg:hidden absolute top-4 left-4 w-10 h-10 bg-cristalux text-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FontAwesomeIcon icon={faCartShopping} className="text-sm" />
        </button>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h2 className="font-display text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h2>
        
        <p className={`text-gray-600 text-sm mb-4 flex-1 ${lineClamp}`}>
          {product.description}
        </p>
        
        {/* Price and Action */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-800">
              {product.price} DA
            </span>
            {discount && (
              <span className="text-sm text-gray-500 line-through">
                {Math.round(product.price / (1 - discount/100))} DA
              </span>
            )}
          </div>
          
          <Link
            to={`/products/${product.id}`}
            onClick={scrollToTop}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg font-accent font-medium hover:bg-gray-700 transition-colors duration-300 text-sm"
          >
            {t('products.viewDetails')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
