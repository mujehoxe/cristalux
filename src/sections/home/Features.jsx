import Feature from "../../components/home/Feature"
import onlineShop from '../../assets/imgs/onlineShop.png'
import delivery from "../../assets/imgs/delivery.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  
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
    <section id="features" className="py-10">
      <motion.div className="md:grid md:grid-cols-3 md:justify-center md:items-center" initial={"hidden"} animate={isVisible ? "visible" : "hidden"} variants={titleVariants}>
        <Feature
          image={onlineShop}
          title={"shop online with us"}
          paragraph={
            "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Consequat Dolor Odio Odio Malesuada At Condimentum Adipiscing Iaculis Semper."
          }
        />
        <Feature
          image={delivery}
          title={"delivery 58 wilaya"}
          paragraph={
            "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Consequat Dolor Odio Odio Malesuada At Condimentum Adipiscing Iaculis Semper."
          }
        />
        <Feature
          image={delivery}
          title={"delivery 58 wilaya"}
          paragraph={
            "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Consequat Dolor Odio Odio Malesuada At Condimentum Adipiscing Iaculis Semper."
          }
        />
      </motion.div>
    </section>
  );
}

export default Features