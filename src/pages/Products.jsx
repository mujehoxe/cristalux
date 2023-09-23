import React, { useState, useEffect } from "react";
import ErrorMsg from "../components/fetch/ErrorMsg";
import ProductCard from "../sections/home/ProductCard";
import Pagination from "../components/products/Pagination";
import Categories from "../components/products/Categories";
import { ToastContainer, toast } from "react-toastify";
import SearchFunc from "../components/products/SearchFunc";

const API_BASE_URL = "https://cristalux-app.onrender.com/api/v1";

const Products = () => {
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


  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, [currentPage, mode, keyword, selectedCategory]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      setError("Failed to fetch categories");
    }
  };

const fetchProducts = async () => {
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
    setProductsFound(productData.length > 0); // Set productsFound based on the length of the product data
    setIsLoading(false);
  } catch (error) {
    setError(error.message);
    setIsLoading(false);
    setProductsFound(false); // Set productsFound to false in case of an error
  }
};


  const getApiUrl = () => {
    switch (mode) {
      case "search":
        return `${API_BASE_URL}/products/search?keyword=${keyword}&page=${currentPage}&pageSize=${productsPerPage}`;
      case "filter":
        return `${API_BASE_URL}/products/by-category?categoryId=${selectedCategory}&page=${currentPage}&pageSize=${productsPerPage}`;
      default:
        return `${API_BASE_URL}/products?page=${currentPage}&pageSize=${productsPerPage}`;
    }
  };

  const handleSearch = (searchKeyword) => {
    setKeyword(searchKeyword);
    setMode("search");
    setCurrentPage(1)
  };

  const handleCategoriesChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1)
    setMode("filter");
  };

  const cardSize =
    "w-[300px] h-[430px] xs:w-[200px] xs:h-[370px] xs2:w-[230px] xs2:h-[400px] sm:w-[300px] sm:h-[420px] md:w-[320px] md:h-[470px] lg:w-[320px] lg:h-[480px] xl:w-[320px] xl:h-[510px]";

  const lineClamp = "line-clamp-2 xs:line-clamp-1 xs2:line-clamp-2 lg:line-clamp-3"

  return (
    <main className="lg:flex lg:min-h-[100vh]">
      {isLoading && <h2>loading...</h2>}
      {error && <ErrorMsg />}
      <section className="py-10 lg:w-[80%]">
        <div className="title">
          <h1 className="text-center text-cristaluxBrown capitalize text-3xl font-bold">
            nous produits
          </h1>
        </div>
        <div className="w-[90%] mx-auto mt-5">
          <p className="text-[#7E7E7E] text-xl">
            Showing {productsPerPage} of {totalProductsNumber}
          </p>
        </div>
        <div className="lg:hidden">
          <h2 className="text-center py-5 text-cristaluxBrown font-bold uppercase text-2xl">
            categories
          </h2>
          <Categories
            flexDirection={"row"}
            categories={categories}
            justifyContent={"center"}
            selectedCategory={selectedCategory}
            setSelectedCategory={handleCategoriesChange}
            setMode={setMode}
          />
        </div>
        <SearchFunc handleSearch={handleSearch} mode={mode} setMode={setMode} />
        <div className="py-10 flex justify-center items-center flex-wrap gap-x-5 gap-y-5">
          {productsFound ? (
            products.map((product, index) => (
              <ProductCard key={index} product={product} size={cardSize} lineClamp={lineClamp} />
            ))
          ) : (
            <p className="text-center text-cristaluxBrown font-bold capitalize text-2xl my-5">
              No products found.
            </p>
          )}
        </div>

        <ToastContainer position="top-right" autoClose={3000} />

        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={totalProductsNumber}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </section>
      <aside className="lg:w-[20%] max-sm:hidden sm:hidden md:hidden lg:block">
        <h2 className="text-center py-5 text-cristalux font-bold uppercase text-2xl">
          categories
        </h2>
        <Categories
          flexDirection={"row"}
          categories={categories}
          justifyContent={"center"}
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoriesChange}
          setMode={setMode}
        />
      </aside>
    </main>
  );
};

export default Products;
