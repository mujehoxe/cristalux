import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartDetails = ({
  cartItem,
  handleIncrease,
  handleDecrease,
  handleRemoveFromCart,
}) => {


    const calculateTotalPrice = () => {
      if (cartItem.percentage) {
        return (
          cartItem.percentage -
          cartItem.price * cartItem.cartQuantity
        ).toFixed(2); // Assuming two decimal places for currency
      } else {
        return (cartItem.price * cartItem.cartQuantity).toFixed(2);
      }
    };

  return (
    <div className="mt-3 py-2 w-full flex items-center gap-x-3 border-b-2 shadow-md">
      <div className="w-[100px] h-[100px] bg-gray-300 rounded-md shadow-sm"></div>
      <div className="flex flex-col justify-center gap-2">
        <h2 className="text-xl text-cristaluxBrown font-semibold">
          {cartItem.name}
        </h2>
        <h2 className="uppercase text-cristaluxBrown font-medium">{calculateTotalPrice()} da</h2>
        <div className="flex items-center w-[120px] justify-around  border-2 border-cristaluxBrown rounded-md">
          <FontAwesomeIcon
            className="text-cristaluxBrown text-base text-left"
            icon={faPlus}
            onClick={() => handleIncrease(cartItem)}
          />
          <button className="text-lg border-x-2 border-x-cristaluxBrown px-4">
            {cartItem.cartQuantity}
          </button>
          <FontAwesomeIcon
            className="text-cristaluxBrown text-base"
            icon={faMinus}
            onClick={() => handleDecrease(cartItem)}
          />
        </div>
      </div>
      <div className="flex flex-col justify-start items-end w-[10%] h-[100px]">
        <FontAwesomeIcon
          icon={faTrash}
          className="text-red-500 text-right text-xl"
          onClick={() => handleRemoveFromCart(cartItem)}
        />
      </div>
    </div>
  );
};

export default CartDetails;
