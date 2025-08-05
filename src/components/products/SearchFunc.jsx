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
      className="bg-white rounded-2xl shadow-lg p-6"
    >
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        {/* Search Input */}
        <div className="relative flex-1 w-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cristalux focus:ring-4 focus:ring-cristalux/20 outline-none transition-all duration-300 font-body text-gray-700 placeholder-gray-400"
            placeholder="Search for products..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        
        {/* Search Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-cristalux text-gray-800 px-8 py-3 rounded-xl font-accent font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
          disabled={isLoading}
          onClick={handleSearchClick}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-800 border-t-transparent rounded-full animate-spin"></div>
              Searching...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faSearch} />
              Search
            </div>
          )}
        </motion.button>
      </div>
      
      {/* Clear Search Button */}
      {mode === "search" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 text-center"
        >
          <button 
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-accent font-medium px-4 py-2 rounded-lg transition-all duration-200"
            onClick={clearSearch}
          >
            <FontAwesomeIcon icon={faTimes} />
            Clear Search
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SearchFunc;
