import { Link } from "react-router-dom";

const Summary = ({ cartItems, cart }) => {

  console.log(cart.cartItems + 1);

  return (
    <div className="py-2">
      <h2 className="text-2xl capitalize font-semibold text-cristaluxBrown">
        summary
      </h2>
      <h2 className="py-2 capitalize text-cristaluxBrown font-medium border-b-2 border-b-cristaluxBrown pb-2">
        total cards items: {cartItems.length}
      </h2>
      <div className="py-2 flex justify-between">
        <h2 className="capitalize text-cristaluxBrown text-xl font-medium">
          total price:
        </h2>
        <h2 className="font-medium text-xl uppercase">
          {cart.cartTotalAmount}da
        </h2>
      </div>
      <div className="my-4">
        <Link
          className="bg-cristaluxBrown text-cristalux px-5 py-2 text-lg rounded-md shadow-md"
          to={"/checkout"}
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default Summary
