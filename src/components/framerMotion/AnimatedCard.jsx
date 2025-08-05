import { motion } from 'framer-motion';

const AnimatedCard = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.6,
  hover = true,
  tap = true 
}) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const hoverVariants = hover ? {
    scale: 1.03,
    y: -8,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  } : {};

  const tapVariants = tap ? {
    scale: 0.97,
    transition: {
      duration: 0.1,
    },
  } : {};

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={hoverVariants}
      whileTap={tapVariants}
      className={`${className}`}
      style={{
        transformOrigin: 'center',
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
