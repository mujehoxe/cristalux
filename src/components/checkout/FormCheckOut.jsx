import { useEffect, useState } from "react";
import wilayasList from "./wilayasList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const FormCheckOut = ({ cart }) => {
  const [selectedWilaya, setSelectedWilaya] = useState(wilayasList[0]); // Use the first wilaya as the default
  const [popUp, setPopUp] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phoneNumber: "",
    state: "",
    address: "",
    orderedProducts: [
      {
        productId: 0,
        quantity: 0,
      },
    ],
    totalPrice: 0,
  });

  const handleItemClick = (wilayaId) => {
    const wilaya = wilayasList.find((wilaya) => wilaya.id === wilayaId);
    setSelectedWilaya(wilaya);
    setPopUp(false);
  };


  useEffect(() => {
    selectedWilaya;
  }, [selectedWilaya]); 



  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("order was successfully sent!")
    console.log(cart);
    const products = cart.cartItems.map((item) => {
      return { productId: item.id, quantity: item.cartQuantity };
    });
    const updatedFormData = {
      ...formData,
      orderedProducts: products,
      totalPrice: totalPrice,
      state: selectedWilaya.name,
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
        console.log("Order placed successfully:", data);
      } else {
        console.error("Failed to place order");
      }
    } catch (error) {
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

  let totalPrice = cart.cartTotalAmount + selectedWilaya.shippingPrice;

  return (
    <div className="w-[95%] md:w-[80%] lg:w-[40%] lg:h-[20%] mx-auto py-2 bg-white flex flex-col items-center justify-center rounded-md">
      <h2 className="text-cristaluxBrown capitalize font-semibold text-xl">
        Payment Details
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
          required
        />
        <input
          className="border-2 border-cristaluxBrown rounded-md shadow-md w-[300px] p-2"
          type="text"
          placeholder="Last Name"
          name="last_name"
          required
          value={formData.last_name}
          onChange={handleInputChange}
        />
        <input
          className="border-2 border-cristaluxBrown rounded-md shadow-md w-[300px] p-2"
          type="number"
          placeholder="Phone Number"
          name="phoneNumber"
          required
          value={formData.phoneNumber}
          onChange={handleInputChange}
          minLength={10}
          maxLength={10}
        />
        <div
          className={`relative flex items-center justify-between border-2 text-cristaluxBrown font-medium border-cristaluxBrown rounded-md shadow-md w-[300px] p-2 cursor-pointer lg:hover:bg-cristaluxBrown lg:hover:text-cristalux transition-all duration-300`}
          onClick={() => setPopUp((prev) => !prev)}
        >
          <h2 className={``}>
            {selectedWilaya ? selectedWilaya.name : "Wilayas"}
          </h2>
          <FontAwesomeIcon icon={popUp ? faChevronUp : faChevronDown} />
          {popUp && (
            <div className="absolute bottom-14 -left-2 shadow-md rounded-md w-[90%] mx-auto bg-white text-cristaluxBrown h-[300px] overflow-y-scroll ">
              {wilayasList.map((wilaya) => (
                <ul
                  key={wilaya.id}
                  onClick={() => handleItemClick(wilaya.id)}
                  className={`border-2 ${
                    selectedWilaya && wilaya.id === selectedWilaya.id
                      ? "bg-cristaluxBrown text-cristalux"
                      : ""
                  } border-cristaluxBrown p-2  cursor-pointer lg:hover:bg-cristaluxBrown lg:hover:text-cristalux transition-all duration-300`}
                >
                  <li className="flex items-center justify-between">
                    <h2 className="text-lg">{wilaya.name}</h2>
                    <h2 className="text-lg">{wilaya.shippingPrice}</h2>
                  </li>
                </ul>
              ))}
            </div>
          )}
        </div>
        <input
          className="border-2 border-cristaluxBrown rounded-md shadow-md w-[300px] p-2"
          type="text"
          placeholder="Address"
          required
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
          {selectedWilaya !== null ? (
            <h2 className="text-xl font-medium">
              Total Price: {totalPrice} DA
            </h2>
          ) : (
            <h2>Total Price: {totalPrice} DA</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormCheckOut;
