
import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);

  // Handle form submission (you can add your own logic for submitting the order)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the form data and placing the order
    // For example, clearing the cart after successful order placement
    // dispatch(clearCart());
  };

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border border-gray-300 px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="border border-gray-300 px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="number">Number</label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  className="border border-gray-300 px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="wilaya">Wilaya</label>
                <select
                  id="wilaya"
                  name="wilaya"
                  className="border border-gray-300 px-4 py-2 w-full"
                  required
                >
                  {/* Replace this with options for all 58 wilayas */}
                  <option value="">Select Wilaya</option>
                  <option value="wilaya1">Wilaya 1</option>
                  {/* Add options for all 58 wilayas */}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  rows="4"
                  className="border border-gray-300 px-4 py-2 w-full"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-cristalux font-bold capitalize py-2 px-6 rounded-md"
              >
                Place Order
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            {cart.cartItems.map((cartItem) => (
              <div
                key={cartItem.id}
                className="flex items-center  justify-between mb-2"
              >
                <img
                  className="w-[200px] h-[200px] object-cover"
                  src={cartItem.thumbnail}
                  alt=""
                />
                <p className="text-lg">{cartItem.name}</p>
                <p className="text-lg">
                  {cartItem.cartQuantity} x{" "}
                  {cartItem.price *
                    cartItem.cartQuantity *
                    (1 - cartItem.offer / 100)}{" "}
                  DA
                </p>
              </div>
            ))}
            <div className="border-t border-gray-300 py-2 mt-4">
              <p className="text-xl font-bold">
                Total:{" "}
                {cart.cartTotalAmount * (1 - cart.cartItems[0]?.offer / 100)} DA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
