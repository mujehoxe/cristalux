import { motion } from 'framer-motion';

const StaggerContainer = ({ 
  children, 
  className = '',
  staggerDelay = 0.1,
  initialDelay = 0 
}) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: initialDelay,
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
