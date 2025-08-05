import Feature from "../../components/home/Feature"
import onlineShop from '../../assets/imgs/onlineShop.png'
import delivery from "../../assets/imgs/delivery.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const featureStyles = "text-white bg-gray-800 rounded-lg shadow-md p-5";
  
        useEffect(() => {
          const handleScroll = () => {
            const aboutSection = document.getElementById("features");
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
          hidden: { x: "-100%", opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeIn",
            },
          },
        };
  return (
    <section id="features" className="py-10 bg-gradient-to-b from-black to-gray-900">
      <motion.div className="md:grid md:grid-cols-3 md:justify-center md:items-center" initial={"hidden"} animate={isVisible ? "visible" : "hidden"} variants={titleVariants}>
        <Feature
          image={onlineShop}
          title={t('features.onlineShop.title')}
          paragraph={t('features.onlineShop.description')}
        />
        <Feature
          image={delivery}
          title={t('features.delivery.title')}
          paragraph={t('features.delivery.description')}
        />
        <Feature
          image={delivery}
          title={t('features.support.title')}
          paragraph={t('features.support.description')}
        />
      </motion.div>
    </section>
  );
}

export default Features