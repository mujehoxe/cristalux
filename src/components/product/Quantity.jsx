import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Quantity = ({ product, selectedQuantity, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(selectedQuantity);

  const handleIncrement = () => {
    if (quantity < product.quantity) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity); // Notify the parent component of the new quantity
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity); // Notify the parent component of the new quantity
    }
  };

  return (
    <div className="my-4">
      <h2 className="text-center text-cristaluxBrown text-3xl capitalize font-semibold lg:text-left">
        Quantity
      </h2>
      <div className="flex items-center gap-4">
        <div className="lg:mx-0 lg:w-[30%] lg:gap-x-10 lg:py-2 my-5 w-[50%] md:w-[40%] mx-auto py-1 border-cristaluxBrown border-2 text-cristaluxBrown flex items-center justify-center gap-x-4">
          <FontAwesomeIcon
            className="text-xl md:text-2xl lg:text-lg cursor-pointer"
            icon={faChevronLeft}
            onClick={handleDecrement}
          />
          <input
            type="number"
            className="w-24 text-center text-2xl lg:text-xl md:text-3xl bg-transparent pl-3"
            value={quantity}
            readOnly
          />
          <FontAwesomeIcon
            className="text-xl md:text-2xl lg:text-lg cursor-pointer"
            icon={faChevronRight}
            onClick={handleIncrement}
          />
        </div>
        <div>
          <h2 className="text-cristaluxBrown font-semibold capitalize text-xl">
            quantite disponible:
            {""}{" "}
            {product.quantity === 0 ? (
              <h2 className="text-red-500">out of stock</h2>
            ) : (
              <h2>{product.quantity}</h2>
            )}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Quantity;
