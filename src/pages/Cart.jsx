import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCartWithQuantity,
  clearCart,
  decreaseCart,
  getTotal,
  removeItem,
} from "../features/cartSlice";
import CartDetails from "../components/cart/CartDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Summary from "../components/cart/Summary";

const Cart = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal());
  }, [cart.cartItems.length, dispatch]);

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

  const handleClearCart = (cartItem) => {
    dispatch(clearCart(cartItem));
  };

  return (
    <section className="w-full min-h-[100vh] bg-gray-100">
      <div>
        <div className="p-4 mt-10 w-[96%] mx-auto bg-white rounded-md shadow-lg my-10 border-2">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl capitalize font-bold">cart</h2>
            {cart.cartItems.length === 0 ? null : (
              <FontAwesomeIcon
                onClick={() => handleClearCart()}
                icon={faTrash}
                className="text-red-500 text-2xl"
              />
            )}
          </div>
          <div className="mt-4">
            {cart.cartItems.length === 0 ? (
              <div className="w-[90%] mx-auto h-[40vh] flex  gap-y-4 flex-col items-center justify-center lg:gap-y-5">
                <p className="text-2xl capitalize text-center">
                  Your cart is currently empty
                </p>
                <Link
                  className="bg-black text-cristalux font-bold capitalize py-2 px-6 rounded-md"
                  to={"/products"}
                >
                  {"<"}- back to products
                </Link>
              </div>
            ) : (
              <div className="mt-5">
                {cart.cartItems &&
                  cart.cartItems.map((cartItem) => (
                    <CartDetails
                      key={cartItem.id}
                      cartItem={cartItem}
                      handleIncrease={handleIncrease}
                      handleDecrease={handleDecrease}
                      handleRemoveFromCart={handleRemoveFromCart}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
        {cart.cartItems.length === 0 ? null : (
        <div className="p-4 mt-10 w-[96%] mx-auto bg-white rounded-md shadow-lg my-10 border-2">
          <Summary cartItems={cart.cartItems} cart={cart} />
        </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
