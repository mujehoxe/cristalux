import { motion } from "framer-motion";

const Categories = ({
  flexDirection,
  justifyContent,
  categories,
  selectedCategory,
  setSelectedCategory,
  setMode,
}) => {
  const isVertical = flexDirection === "column";
  
  return (
    <div
      className={`flex gap-3 flex-wrap items-center ${
        isVertical ? "flex-col items-stretch" : "justify-center"
      }`}
    >
      {categories &&
        categories.map((cat, index) => (
          <motion.button
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative overflow-hidden font-accent font-medium capitalize px-4 py-3 rounded-xl transition-all duration-300
              ${isVertical ? "w-full text-left" : "flex-shrink-0"}
              ${
                selectedCategory === cat.id
                  ? "bg-cristalux text-gray-800 shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-800 border border-gray-200"
              }
            `}
            onClick={() => setSelectedCategory(cat.id)}
          >
            <span className="relative z-10">{cat.name}</span>
            {selectedCategory === cat.id && (
              <motion.div
                className="absolute inset-0 bg-cristalux"
                layoutId="activeCategory"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      
      {selectedCategory && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            font-accent font-medium capitalize px-4 py-3 rounded-xl transition-all duration-300
            bg-red-500 text-white hover:bg-red-600 shadow-lg
            ${isVertical ? "w-full" : "flex-shrink-0"}
          `}
          onClick={() => {
            setSelectedCategory(null);
            setMode("all");
          }}
        >
          Clear Filter
        </motion.button>
      )}
    </div>
  );
};

export default Categories;
