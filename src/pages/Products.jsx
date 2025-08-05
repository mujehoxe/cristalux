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
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Transition />
      
      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="loading"></div>
        </div>
      )}
      
      {/* Error State */}
      {error && <ErrorMsg />}
      
      <div className="container mx-auto px-4 py-8 lg:flex lg:gap-8">
        {/* Sidebar for desktop */}
        <aside className="hidden lg:block lg:w-80 lg:flex-shrink-0">
          <div className="sticky top-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h2 className="font-display text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-cristalux rounded-full"></span>
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
            </div>
          </div>
        </aside>
        
        {/* Main content */}
        <section className="flex-1">
          {/* Header */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {t('products.title')}
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                {t('products.showing', { count: productsPerPage, total: totalProductsNumber })}
              </p>
            </motion.div>
          </div>
          
          {/* Mobile categories */}
          <div className="lg:hidden mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="font-display text-xl font-bold text-gray-800 mb-4 text-center">
                {t('products.categories')}
              </h2>
              <Categories
                flexDirection="row"
                categories={categories}
                justifyContent="center"
                selectedCategory={selectedCategory}
                setSelectedCategory={handleCategoriesChange}
                setMode={setMode}
              />
            </div>
          </div>
          
          {/* Search */}
          <div className="mb-8">
            <SearchFunc handleSearch={handleSearch} mode={mode} setMode={setMode} />
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
            {productsFound ? (
              products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex justify-center"
                >
                  <ProductCard
                    product={product}
                    size="w-full max-w-sm"
                    lineClamp={lineClamp}
                  />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-xl font-medium">
                  {t('products.noProducts')}
                </p>
              </div>
            )}
          </div>
          
          {/* Pagination */}
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={totalProductsNumber}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </section>
      </div>
      
      <ToastContainer position="top-right" autoClose={3000} />
    </main>
  );
};

export default Products;
