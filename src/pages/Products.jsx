import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import ErrorMsg from "../components/fetch/ErrorMsg";
import ProductCard from "../sections/home/ProductCard";
import Pagination from "../components/products/Pagination";
import Categories from "../components/products/Categories";
import { ToastContainer } from "react-toastify";
import SearchFunc from "../components/products/SearchFunc";
import Transition from "../components/framerMotion/Transition";
import { motion } from "framer-motion";

const API_BASE_URL = "/api/v1";

const Products = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [totalProductsNumber, setTotalProductsNumber] = useState(0);
  const [mode, setMode] = useState("all");
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const productsPerPage = 6;
  const [productsFound, setProductsFound] = useState(true);

const getApiUrl = useCallback(() => {
    switch (mode) {
      case "search":
        return `${API_BASE_URL}/products/search?keyword=${keyword}&page=${currentPage}&pageSize=${productsPerPage}`;
      case "filter":
        return `${API_BASE_URL}/products/by-category?categoryId=${selectedCategory}&page=${currentPage}&pageSize=${productsPerPage}`;
      default:
        return `${API_BASE_URL}/products?page=${currentPage}&pageSize=${productsPerPage}`;
    }
  }, [mode, keyword, currentPage, selectedCategory, productsPerPage]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      setError("Failed to fetch categories");
    }
  };

  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const apiUrl = getApiUrl();
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const [productData, totalData] = await response.json();
      setProducts(productData);
      setTotalProductsNumber(totalData);
      setProductsFound(productData.length > 0);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      setProductsFound(false);
    }
  }, [getApiUrl]);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, [fetchProducts]);


  const handleSearch = (searchKeyword) => {
    setKeyword(searchKeyword);
    setMode("search");
    setCurrentPage(1);
  };

  const handleCategoriesChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
    setMode("filter");
  };

  const cardSize =
    "w-[300px] h-[430px] xs:w-[200px] xs:h-[370px] xs2:w-[230px] xs2:h-[400px] sm:w-[300px] sm:h-[420px] md:w-[320px] md:h-[470px] lg:w-[320px] lg:h-[480px] xl:w-[320px] xl:h-[510px]";

  const lineClamp =
    "line-clamp-2 xs:line-clamp-1 xs2:line-clamp-2 lg:line-clamp-3";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Transition />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 mb-12">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cristalux to-yellow-300 bg-clip-text text-transparent">
              {t('products.title')}
            </h1>
            <p className="font-body text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our exquisite collection of premium crystal products
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cristalux rounded-full"></div>
                {t('products.showing', { count: productsPerPage, total: totalProductsNumber })}
              </span>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="loading"></div>
        </div>
      )}
      
      {/* Error State */}
      {error && <ErrorMsg />}
      
      <div className="container mx-auto px-4 pb-16">
        <div className="lg:flex lg:gap-12">
          {/* Sidebar for desktop */}
          <aside className="hidden lg:block lg:w-80 lg:flex-shrink-0">
            <div className="sticky top-8 space-y-6">
              {/* Categories Filter */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 p-8"
              >
                <h2 className="font-display text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-cristalux to-yellow-400 rounded-full"></div>
                  {t('products.categories')}
                </h2>
                <Categories
                  flexDirection="column"
                  categories={categories}
                  justifyContent="flex-start"
                  selectedCategory={selectedCategory}
                  setSelectedCategory={handleCategoriesChange}
                  setMode={setMode}
                />
              </motion.div>
              
              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-cristalux/10 to-yellow-100/50 rounded-3xl p-6 border border-cristalux/20"
              >
                <h3 className="font-accent font-semibold text-gray-800 mb-4">Collection Stats</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Products</span>
                    <span className="font-semibold text-gray-800">{totalProductsNumber}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Categories</span>
                    <span className="font-semibold text-gray-800">{categories.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Current Page</span>
                    <span className="font-semibold text-gray-800">{currentPage}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </aside>
          
          {/* Main content */}
          <section className="flex-1">
            {/* Mobile categories */}
            <div className="lg:hidden mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 p-6"
              >
                <h2 className="font-display text-xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-cristalux to-yellow-400 rounded-full"></div>
                  {t('products.categories')}
                  <div className="w-1 h-6 bg-gradient-to-b from-cristalux to-yellow-400 rounded-full"></div>
                </h2>
                <Categories
                  flexDirection="row"
                  categories={categories}
                  justifyContent="center"
                  selectedCategory={selectedCategory}
                  setSelectedCategory={handleCategoriesChange}
                  setMode={setMode}
                />
              </motion.div>
            </div>
            
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <SearchFunc handleSearch={handleSearch} mode={mode} setMode={setMode} />
            </motion.div>
            
            {/* Products Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {productsFound ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
                  {products.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                      className="flex justify-center"
                    >
                      <ProductCard
                        product={product}
                        size="w-full max-w-sm"
                        lineClamp={lineClamp}
                      />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-center py-20"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 p-12 max-w-md mx-auto">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29.82-5.877 2.172M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0112 21c-2.36 0-4.547-.732-6.319-1.994M15 19.128a9.99 9.99 0 00-3-3.124" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-gray-800 mb-3">
                      No Products Found
                    </h3>
                    <p className="text-gray-600 font-body leading-relaxed">
                      {t('products.noProducts')}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
            
            {/* Pagination */}
            {productsFound && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={totalProductsNumber}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </motion.div>
            )}
          </section>
        </div>
      </div>
      
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Products;
