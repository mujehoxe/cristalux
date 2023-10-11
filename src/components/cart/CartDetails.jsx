import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const CartDetails = ({
  cartItem,
  handleIncrease,
  handleDecrease,
  handleRemoveFromCart,
  totalPrice,
}) => {
  return (
    <motion.div
      className="mt-3 rounded-md p-2 w-full bg-gray-100 flex  gap-x-3 border-b-2 shadow-md"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-[100px] lg:w-[150px] h-[100px] lg:h-[150px] bg-gray-300 rounded-md shadow-sm">
        <motion.img
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          src={cartItem.thumbnail}
          className="w-full h-full object-cover rounded-md"
          alt={cartItem.name}
        />
      </div>
      <div className="flex flex-col justify-around gap-2 p-2 w-[70%] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-start items-end "
        >
          <FontAwesomeIcon
            icon={faTrash}
            className="text-red-500 text-right text-xl lg:cursor-pointer"
            onClick={() => handleRemoveFromCart(cartItem)}
          />
        </motion.div>

        <div>
          <h2 className="lg:w-[90%] lg:line-clamp-2 hidden xs2:block">
            {cartItem.description}
          </h2>
          <h2 className="uppercase text-cristaluxBrown font-semibold">
            {totalPrice} da
          </h2>
        </div>
        <motion.div
          className="flex items-center w-[120px] justify-around  border-2 border-cristaluxBrown rounded-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <FontAwesomeIcon
            className="text-cristaluxBrown text-base text-left lg:cursor-pointer"
            icon={faPlus}
            onClick={() => handleIncrease(cartItem)}
          />
          <button className="text-lg border-x-2 border-x-cristaluxBrown px-4">
            {cartItem.cartQuantity}
          </button>
          <FontAwesomeIcon
            className="text-cristaluxBrown text-base lg:cursor-pointer"
            icon={faMinus}
            onClick={() => handleDecrease(cartItem)}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CartDetails;
