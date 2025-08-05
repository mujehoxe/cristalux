import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const SearchFunc = ({ handleSearch, mode, setMode }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchClick = async () => {
    if (searchKeyword.trim() === "") {
      toast.error("Please enter a search keyword.", {
        autoClose: 3000,
      });
      return;
    }

    setIsLoading(true);
    await handleSearch(searchKeyword);
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  const clearSearch = () => {
    setSearchKeyword("");
    setMode("all");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 p-8"
    >
      <div className="text-center mb-6">
        <h2 className="font-display text-2xl font-bold text-gray-800 mb-2">Find Your Perfect Product</h2>
        <p className="font-body text-gray-600">Search through our curated collection of premium items</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        {/* Search Input */}
        <div className="relative flex-1 w-full">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 text-lg" />
          </div>
          <input
            type="text"
            className="w-full pl-14 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-cristalux focus:ring-4 focus:ring-cristalux/20 outline-none transition-all duration-300 font-body text-gray-700 placeholder-gray-500 text-lg bg-white/80 backdrop-blur-sm"
            placeholder="Search for products, categories, or styles..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        
        {/* Search Button */}
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-r from-cristalux to-yellow-400 text-gray-800 px-10 py-4 rounded-2xl font-accent font-bold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto text-lg min-w-[140px]"
          disabled={isLoading}
          onClick={handleSearchClick}
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-3">
              <div className="w-5 h-5 border-2 border-gray-800 border-t-transparent rounded-full animate-spin"></div>
              <span className="font-semibold">Searching...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3">
              <FontAwesomeIcon icon={faSearch} className="text-lg" />
              <span className="font-semibold">Search</span>
            </div>
          )}
        </motion.button>
      </div>
      
      {/* Clear Search Button */}
      {mode === "search" && (
        <motion.div
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: "auto", marginTop: 24 }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
          className="text-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-accent font-semibold px-6 py-3 rounded-xl transition-all duration-200 border border-red-200 hover:border-red-300"
            onClick={clearSearch}
          >
            <FontAwesomeIcon icon={faTimes} />
            Clear Search Results
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SearchFunc;
