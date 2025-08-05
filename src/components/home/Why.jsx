import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Why = ({
  title,
  image,
  paragraph,
  link,
  linkText,
  flexRowReverse,
  xmove,
  number,
}) => {
  const { t } = useTranslation();
  const flexDirection = flexRowReverse ? "row-reverse" : "row";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById(`whyUs${number}`);
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
  }, [number]);

  const imageVariant = {
    hidden: { x: xmove, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  const transitionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }, transition: { duration: 4 }
  };


  return (
    <div
      id={`whyUs${number}`}
      style={{ flexDirection }}
      className="h-[100vh]  flex-col  justify-center md:flex md:items-center md:justify-center md:w-[95%] md:gap-x-5 mx-auto py-5"
    >
      <motion.div
        className="relative h-[30%] md:h-[60%] md:flex md:flex-col md:items-center md:justify-center   text-center md:w-[50%]"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={transitionVariants}
      >
        <h2 className="text-4xl uppercase font-bold lg:text-5xl">{title}</h2>
        <p className="py-4 lg:py-7 capitalize text-xs w-[80%] mx-auto sm:text-sm lg:text-base">
          {paragraph}
        </p>
        <Link
          to={link}
          className="bg-cristaluxBrown text-xl py-3 lg:py-3 px-6 text-cristalux rounded-md"
        >
          {linkText}
        </Link>
      </motion.div>
      <div className="sm:w-[70%] md:w-[70%] h-[70%] md:h-[90%] lg:h-[100%] mx-auto flex flex-col justify-center py-5">
        <motion.img
          initial={"hidden"}
          animate={isVisible ? "visible" : "hidden"}
          variants={imageVariant}
          className="my-5 w-[90%] h-[90%]  mx-auto shadow-xl object-cover rounded-md"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Why;
