import { Link } from "react-router-dom";

const Order = () => {
  return (
    <section className="">
      <div className="order full h-[200px] lg:h-[300px] flex items-center justify-center">
        <div className="text-center">
          <h2 className="py-5 text-2xl capitalize text-cristalux">
            order now for an express delivery !
          </h2>
          <Link className="text-xl border-2 border-cristalux px-6 py-2 text-cristalux" to={"products"}>view more {">"}</Link>
        </div>
      </div>
    </section>
  );
}

export default Order