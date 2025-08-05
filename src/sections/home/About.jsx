import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
          const handleScroll = () => {
            const aboutSection = document.getElementById("about");
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
    <section id="about" className="h-[100vh]  w-full about">
      <motion.div
        initial={"hidden"}
        animate={isVisible ? "visible" : "hidden"}
        variants={titleVariants}
        className="relative w-full h-full flex items-center justify-center"
      >
        <div className="text-center z-10 ">
          <p className="text-sm text-cristalux py-10 capitalize md:w-[80%] md:text-2xl lg:w-[70%] lg:text-3xl lg:leading-[40px] xs:w-[90%] xs:mx-auto xs:text-sm xs2:text-base sm:text-xl">
            {t('about.welcomeMessage')}
          </p>
          <Link
            className="text-cristalux border-2 border-cristalux py-2 px-6  md:text-3xl capitalize font-bold lg:text-2xl lg:hover:bg-cristaluxBrown transition-all duration-300 rounded-md"
            to={"products"}
          >
            {t('about.viewMore')}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default About