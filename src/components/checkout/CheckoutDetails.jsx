import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToCartWithQuantity,
  decreaseCart,
  getTotal,
  removeItem,
} from "../../features/cartSlice";
import CartDetails from "../cart/CartDetails";
import PropTypes from "prop-types";

const CheckoutDetails = ({ cart }) => {
  const [selectedQuantity] = useState(1);
  const dispatch = useDispatch();


      const calculateTotalPrice = (cartItem) => {
        if (cartItem.percentage) {
          return (
            (cartItem.price - (cartItem.price * cartItem.percentage) / 100) *
            cartItem.cartQuantity
          ).toFixed(2); // Assuming two decimal places for currency
        } else {
          return (cartItem.price * cartItem.cartQuantity).toFixed(2);
        }
      };



  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeItem(cartItem));
  };

  const handleDecrease = (cartItem) => {
    dispatch(decreaseCart(cartItem));
    dispatch(getTotal());
  };

  const handleIncrease = (product) => {
    dispatch(addToCartWithQuantity({ product, quantity: selectedQuantity }));
    dispatch(getTotal());
  };

  return (
    <div className="w-[95%] md:w-[80%] lg:w-[60%] mx-auto p-4 bg-white rounded-md shadow-md">
      <h2 className="capitalize font-bold text-cristaluxBrown text-xl">
        Cart Summary
      </h2>
      <div className="my-4">
        {cart.cartItems &&
          cart.cartItems.map((cartItem) => (
            <CartDetails
              key={cartItem.id}
              totalPrice={calculateTotalPrice(cartItem)}
              cartItem={cartItem}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
      </div>
    </div>
  );
};

CheckoutDetails.propTypes = {
  cart: PropTypes.shape({
    cartItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        price: PropTypes.number.isRequired,
        cartQuantity: PropTypes.number.isRequired,
        percentage: PropTypes.number,
      })
    ).isRequired,
  }).isRequired,
};

export default CheckoutDetails;
