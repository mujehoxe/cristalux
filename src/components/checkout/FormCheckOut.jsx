import { useState } from "react";
import Wilayas from "./Wilayas";

const FormCheckOut = ({ cart }) => {
  const [wilaya, setWilaya] = useState(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phoneNumber: "",
    state: "", // This field should store the selected wilaya
    address: "",
    orderedProducts: [
      {
        productId: 0,
        quantity: 0,
      },
    ],
    totalPrice: 0,
  });

  const shippingPrice =
    wilaya !== null
      ? (cart.cartTotalAmount += wilaya.price)
      : cart.cartTotalAmount;

  // Use useSelector to access the selected wilaya from Redux store

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(cart);
    const products = cart.cartItems.map((item) => {
      return { productId: item.id, quantity: item.quantity };
    });
    const updatedFormData = {
      ...formData,
      orderedProducts: products,
      totalPrice: cart.cartTotalAmount,
    };

    try {
      const response = await fetch(
        "https://cristalux-app.onrender.com/api/v1/orders/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormData),
        }
      );

      if (response.status === 201) {
        const data = await response.json();
        // Handle the successful response here, e.g., show a success message
        console.log("Order placed successfully:", data);
      } else {
        // Handle errors here, e.g., show an error message
        console.error("Failed to place order");
      }
    } catch (error) {
      // Handle network or other errors here
      console.error("Error:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="w-[95%] mx-auto py-2 bg-white flex flex-col items-center justify-center">
      <h2 className="text-cristaluxBrown capitalize font-semibold text-xl">
        Payment Address
      </h2>
      <form
        className="flex flex-col justify-center items-center gap-y-2 my-5"
        onSubmit={handleSubmit}
      >
        <input
          className="border-2 border-cristaluxBrown rounded-md shadow-md w-[300px] p-2"
          type="text"
          placeholder="First Name"
          name="first_name"
          value={formData.first_name}
          onChange={handleInputChange}
        />
        <input
          className="border-2 border-cristaluxBrown rounded-md shadow-md w-[300px] p-2"
          type="text"
          placeholder="Last Name"
          name="last_name"
          value={formData.last_name}
          onChange={handleInputChange}
        />
        <input
          className="border-2 border-cristaluxBrown rounded-md shadow-md w-[300px] p-2"
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          minLength={10}
          maxLength={10}
        />
        <Wilayas wilaya={wilaya} setWilaya={setWilaya} />
        <input
          className="border-2 border-cristaluxBrown rounded-md shadow-md w-[300px] p-2"
          type="text"
          placeholder="Address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <button
          className="bg-cristaluxBrown text-cristalux text-lg capitalize font-semibold px-6 p-1 rounded-md"
          type="submit"
        >
          Send
        </button>
      </form>
      <div className="my-4">
        <h2 className="pt-2 capitalize text-cristaluxBrown font-medium border-b-2 border-b-cristaluxBrown pb-2">
          Total Items: {cart.cartItems.length}
        </h2>
        <div className="flex items-center gap-x-2">
          <h2 className="text-xl font-medium">Total Price:</h2>
          <h2 className="font-medium text-xl uppercase">{shippingPrice}da</h2>
        </div>
      </div>
    </div>
  );
};

export default FormCheckOut;
