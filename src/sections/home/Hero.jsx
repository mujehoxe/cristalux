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
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cristalux capitalize mb-6 leading-tight tracking-tight text-balance">
            {t('hero.title')}
          </h1>
          <p className="font-body text-cristalux text-sm xs2:text-base sm:text-lg md:text-xl lg:text-2xl text-center py-5 sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto leading-relaxed text-pretty opacity-90">
            {t('hero.description')}
          </p>
          <div className="mt-8 lg:mt-12">
            <Link to={"products"}>
              <button className="accent-text bg-transparent text-cristalux border-2 border-cristalux py-4 px-8 lg:py-5 lg:px-12 text-base lg:text-xl font-semibold tracking-wide rounded-lg hover:bg-cristalux hover:text-black transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-cristalux/30">
                {t('hero.shopNow')}
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero