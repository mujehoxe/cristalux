import { Link } from "react-router-dom";

const Order = () => {
  return (
    <section className="overflow-hidden w-[100%] order">
      <div className="w-full h-[200px] md:h-[300px] flex items-center justify-center">
        <div className="text-center">
          <h2 className="py-5 text-2xl capitalize text-cristalux">
            Commandez maintenant pour une livraison express !
          </h2>
          <Link
            className="text-xl border-2 border-cristalux px-6 py-2 text-cristalux"
            to={"products"}
          >
            voir plus {">"}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Order