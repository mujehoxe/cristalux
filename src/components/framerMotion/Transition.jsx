import { motion } from "framer-motion";
import logoSvg from "../../assets/imgs/logoSvg.svg";
import { useEffect, useState } from "react";

const Transition = () => {
  const [animationDuration, setAnimationDuration] = useState(2);

  const transitionVariants = {
    initial: {
      x: "0%", // Start from the left (outside of the screen)
      opacity: 1, // Start with opacity 0
    },
    animate: {
      x: "100%", // Move to the center
      opacity: 0, // Fade in while moving
    },
    exit: {
      x: "100%", // Exit to the right (outside of the screen from the left)
      opacity: 0, // Fade out while exiting
    },
  };

const imageVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: { duration: 1.9 }, // Increase the duration here
  },
  exit: {
    opacity: 0,
    transition: { duration: 1.9 }, // Increase the duration here
  },
};


  useEffect(() => {
    const screenWidth = window.innerWidth;
    const durationFactor = Math.min(1, screenWidth / 1920); // Adjust this factor as needed
    const calculatedDuration = 1.5 * durationFactor; // 1.5 is the base duration, adjust as needed
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
