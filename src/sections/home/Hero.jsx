import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  
  const variants = {
      hidden: { opacity: 0, x: 50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.2, delay: 1, ease: "easeOut" },
      },
    };
  return (
    <section className="hero w-full h-[100vh] bg-black">
      <motion.div
        className="contain w-[90%] h-full  mx-auto text-center flex items-center justify-center"
        initial={"hidden"}
        animate={"visible"}
        variants={variants}
      >
        <div>
          <h1 className="title text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cristalux capitalize">
            {t('hero.title')}
          </h1>
          <p className="text-cristalux xs2:text-base text-center text-xs py-5 sm:text-base sm:w-[90%] md:w-[80%] sm:mx-auto md:text-xl lg:text-2xl">
            {t('hero.description')}
          </p>
          <Link className="" to={"products"}>
            <button className="lg:my-5 text-cristalux border-2 border-cristalux py-3 px-10 lg:text-xl lg:hover:bg-cristaluxBrown rounded-md transition-all duration-200">
              {t('hero.shopNow')}
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero