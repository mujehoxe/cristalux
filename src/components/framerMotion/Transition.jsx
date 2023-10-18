import { motion } from "framer-motion";
import logoSvg from "../../assets/imgs/logoSvg.svg";
import { useEffect, useState } from "react";

const Transition = () => {
  const [animationDuration, setAnimationDuration] = useState(2);

  const transitionVariants = {
    initial: {
      x: "0%",
      opacity: 1,
    },
    animate: {
      x: "100%",
      opacity: 0,
    },
    exit: {
      x: "100%",
      opacity: 0,
    },
  };

  const imageVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: { duration: 1.9 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1.9 },
    },
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const durationFactor = Math.min(1, screenWidth / 1920);
    const calculatedDuration = 1.5 * durationFactor;
    setAnimationDuration(calculatedDuration);
  }, []);

  return (
    <motion.div
      className="hero fixed top-0 bottom-0 left-0 w-screen h-screen z-50 flex items-center justify-center bg-black"
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: animationDuration, ease: "easeInOut" }}
    >
      <motion.div
        className="w-72 h-72 mx-auto"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={imageVariants}
      >
        <motion.img
          className="w-full h-full object-contain"
          src={logoSvg}
          alt=""
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Transition;
