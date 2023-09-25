import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartDetails = ({
  cartItem,
  handleIncrease,
  handleDecrease,
  handleRemoveFromCart,
  totalPrice,
}) => {


  
  

  return (
    <div className="mt-3 rounded-md p-2 w-full bg-gray-100 flex  gap-x-3 border-b-2 shadow-md">
      <div className="w-[100px] lg:w-[150px] h-[100px] lg:h-[150px] bg-gray-300 rounded-md shadow-sm">
        <img src={"https://cristalux-app.onrender.com/" + cartItem.thumbnail} className="w-full h-full object-cover rounded-md" alt={cartItem.name} />
      </div>
      <div className="flex flex-col justify-around gap-2 p-2 w-[70%] mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-sm xs:text-lg text-cristaluxBrown font-semibold">
            {cartItem.name} + {cartItem.id}
          </h2>
          <div className="flex flex-col justify-start items-end bg-red-300">
            <FontAwesomeIcon
              icon={faTrash}
              className="text-red-500 text-right text-xl lg:cursor-pointer"
              onClick={() => handleRemoveFromCart(cartItem)}
            />
          </div>
        </div>
        <div>
          <h2 className="lg:w-[90%] lg:line-clamp-2 hidden xs2:block">
            {cartItem.description}
          </h2>
          <h2 className="uppercase text-cristaluxBrown font-semibold">
            {totalPrice} da
          </h2>
        </div>
        <div className="flex items-center w-[120px] justify-around  border-2 border-cristaluxBrown rounded-md">
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
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
