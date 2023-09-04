

import Slider from "../../components/products/Slider";

const LatestProducts = ({ products }) => {



  return (
    <section className="h-[101vh] pt-4">
      <div className="w-[90%] mx-auto text-center py-5">
        <h2 className="title capitalize text-3xl xs2:text-4xl md:text-5xl  font-bold text-[#373737]">
          Derniers produits
        </h2>
        <p className="capitalize py-1 text-xs xs2:text-sm md:text-base lg:text-lg md:w-[70%] md:mx-auto">
          Explorez notre gamme exquise. Découvrez l{"'"}art de décorer avec
          style. Transformez votre maison en un havre de beauté.
        </p>
      </div>
      <Slider products={products} />
    </section>
  );
};

export default LatestProducts;
