import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { addToCart, clearCart, decreaseCart, getTotal, removeItem } from "../features/cartSlice";

    const Cart = () => {
        const cart = useSelector((state) => state.cart);
        const dispatch = useDispatch()
        useEffect(() => {
        dispatch(getTotal());
        }, [cart.cartItems.length, dispatch]);


        const handleRemoveFromCart = (cartItem) => {
            dispatch(removeItem(cartItem))
        }

        const handleDecrease = (cartItem) => {
            dispatch(decreaseCart(cartItem))
            dispatch(getTotal())
        } 

        const handleIncrease = (cartItem) => {
        dispatch(addToCart(cartItem));
        dispatch(getTotal());
        };
 

        const handleClearCart = (cartItem) => {
            dispatch(clearCart(cartItem))
        }

    return (
      <section className="pb-10">
        <div className="py-4 text-center">
          <h1 className="title text-4xl font-bold">Shopping Cart</h1>
        </div>
        {cart.cartItems.length === 0 ? (
          <div className="w-[90%] mx-auto h-[70vh] flex lg:flex-col items-center justify-center lg:gap-y-5">
            <p className="text-2xl capitalize text-center">
              Your cart is currently empty
            </p>
            <Link className="bg-black text-cristalux font-bold capitalize py-2 px-6 rounded-md" to={'/products'}>{"<"}- back to products</Link>
          </div>
        ) : (
          <div className="lg:flex lg:px-10">
            <div className="lg:w-[70%]">
              {cart.cartItems?.map((cartItem) => (
                <>
                  <div
                    className="relative border-2 py-10 lg:py-4  h-[200px] my-10 md:flex md:justify-around md:items-center lg:justify-start lg:w-[90%] lg:mx-auto lg:gap-x-20 lg:px-10"
                    key={cartItem.id}
                  >
                    <button
                      onClick={() => handleRemoveFromCart(cartItem)}
                      className="absolute -top-[15%] text-5xl font-black text-red-900 -right-[2%]"
                    >
                      X
                    </button>
                    <div className="w-[70%] md:w-[40%] lg:w-[25%] lg:h-[170px] max-sm:mx-auto  h-[250px]">
                      <img
                        className="w-full h-full object-cover rounded-lg shadow-md"
                        src={cartItem.thumbnail}
                        alt={cartItem.name}
                      />
                    </div>
                    <div className="py-5">
                      <h2 className="text-center capitalize text-2xl font-bold">
                        {cartItem.name}
                      </h2>
                      <div className="border-2 w-[70%] mx-auto my-5 py-3 flex items-center justify-center gap-x-10">
                        <button
                          onClick={() => handleIncrease(cartItem)}
                          className="text-2xl"
                        >
                          {"+"}
                        </button>
                        <button className="text-4xl lg:text-2xl">
                          {cartItem.cartQuantity}
                        </button>
                        <button
                          onClick={() => handleDecrease(cartItem)}
                          className="text-2xl"
                        >
                          {"-"}
                        </button>
                      </div>
                      <div className="flex items-center justify-center gap-x-10">
                        <h3 className="text-2xl capitalize">
                          Total Price:
                          <span className="px-5 text-xl">
                            {cartItem.price *
                              cartItem.cartQuantity *
                              (1 - cartItem.offer / 100)}
                            DA
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </>
              ))}
              <div className="text-center my-5 ">
                <button
                  onClick={() => handleClearCart()}
                  className="capitalize bg-cristalux px-6 py-2 text-2xl rounded-md font-bold"
                >
                  clear cart
                </button>
              </div>
            </div>
            <div className="cartTotal text-center text-xl border-2 w-[80%] lg:w-[30%] lg:my-10 lg:min-h-[460px] mx-auto py-2">
              <h4 className="capitalize font-bold underline">order summary</h4>
              <div className="flex justify-between px-4 py-4">
                <h2>Items:</h2>
                <span>{cart.cartItems.length}</span>
              </div>
              <div className="flex justify-between px-4 py-2">
                <h2>Total:</h2>
                <span>
                  {cart.cartTotalAmount * (1 - cart.cartItems[0]?.offer / 100)}
                  DA
                </span>
              </div>
              <div className="my-4">
                <Link
                  className="bg-cristalux px-4 py-2 text-xl rounded-md font-bold"
                  to={"/checkout"}
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    );
}

export default Cart