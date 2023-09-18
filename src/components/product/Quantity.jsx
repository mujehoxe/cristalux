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
    <div className="">
      <h2 className="text-center text-cristaluxBrown text-3xl capitalize font-semibold">
        Quantity
      </h2>
      <div className="my-5 w-[50%] mx-auto py-1 border-cristaluxBrown border-2 text-cristaluxBrown flex items-center justify-center gap-x-4">
        <FontAwesomeIcon
          className="text-xl cursor-pointer"
          icon={faChevronLeft}
          onClick={handleDecrement}
        />
        <input
          type="number"
          className="w-10 text-center text-2xl"
          value={quantity}
          readOnly
        />
        <FontAwesomeIcon
          className="text-xl cursor-pointer"
          icon={faChevronRight}
          onClick={handleIncrement}
        />
      </div>
    </div>
  );
};

export default Quantity;
