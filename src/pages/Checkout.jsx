import { useSelector, useDispatch } from "react-redux";
import { clearCart, getTotal } from "../features/cartSlice";
import CheckoutDetails from "../components/checkout/CheckoutDetails"
import FormCheckOut from "../components/checkout/FormCheckOut";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Checkout = () => {
  
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal());
  }, [cart.cartItems.length, dispatch]);


  return (
    <section className="bg-gray-200 w-full min-h-[100vh] xs:bg-red-300 xs2:bg-red-500 sm:bg-red-950 md:bg-green-300">
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
        <div className="py-5 flex flex-col justify-center gap-y-5">
          <CheckoutDetails cart={cart}  />
          <FormCheckOut cart={cart}  />
        </div>
      )}
    </section>
  );
};

export default Checkout;
