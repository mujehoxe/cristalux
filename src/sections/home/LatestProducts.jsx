

import { useEffect, useState } from "react";
import Slider from "../../components/products/Slider";
import ErrorMsg from "../../components/fetch/ErrorMsg";
import { motion } from "framer-motion";

const LatestProducts = () => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
    
  useEffect(() => {
      const getProducts = async () => {
        try {
          const data = await fetch(
            "https://cristalux-app.onrender.com/api/v1/products/latest"
          );
          setProducts(await data.json());
        } catch (error) {
          setError(error.message);
        }
      };
      getProducts();
    }, [products]);

      useEffect(() => {
        const handleScroll = () => {
          const aboutSection = document.getElementById("latestSection");
          if (aboutSection) {
            const rect = aboutSection.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);


 const titleVariants = {
   hidden: { y: "-100%", opacity: 0 },
   visible: {
     y: 0,
     opacity: 1,
     transition: {
       duration: 0.6,
       ease: "easeIn",
     },
   },
 };




  return (
    <main>
      {error && <ErrorMsg />}
      {products && (
        <section className="">
          <motion.div
            id="latestSection"
            className="w-[90%] mx-auto text-center mt-5"
            initial={"hidden"}
            animate={isVisible ? "visible" : "hidden"}
            variants={titleVariants}
          >
            <h2 className="title capitalize text-3xl xs2:text-4xl md:text-5xl  font-bold text-[#373737]">
              Derniers produits
            </h2>
            <p className="capitalize py-1 text-sm xs2:text-sm md:text-base lg:text-lg md:w-[70%] md:mx-auto">
              Explorez notre gamme exquise. Découvrez l{"'"}art de décorer avec
              style. Transformez votre maison en un havre de beauté.
            </p>
          </motion.div>
          <Slider products={products} isVisible={isVisible} />
        </section>
      )}
    </main>
  );
};

export default LatestProducts;
