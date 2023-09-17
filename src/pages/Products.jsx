import { useEffect, useState } from "react";
import { useNavigate, useNavigation, useSearchParams } from "react-router-dom";
import ErrorMsg from "../components/fetch/ErrorMsg";
import up from "../assets/imgs/up.png";
import down from "../assets/imgs/down.png";
import ProductCard from "../sections/home/ProductCard";
import Pagination from "../components/products/Pagination";
import Category from "../components/products/Categories";
import Categories from "../components/products/Categories";





const Products = () => {
  const [products, setProducts] = useState([]);
  const [totalProductsNumber, setTotalProductsNumber] = useState(0);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);


  const productsPerPage = 6;

useEffect(() => {
  const getProducts = async () => {
    try {
      const data = await fetch(
        `https://cristalux-app.onrender.com/api/v1/products?page=${currentPage}&pageSize=${productsPerPage}`
      );
      const [fetchedProducts, totalProductsLength] = await data.json();
      setProducts(fetchedProducts);
      setTotalProductsNumber(totalProductsLength);
    } catch (error) {
      setError(error.message);
    }
  };
  getProducts();
}, [currentPage]);


  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetch(
          `https://cristalux-app.onrender.com/api/v1/categories`
        );
        const fetchedCategories = await data.json();
        setCategories(fetchedCategories);
      } catch (error) {
        setError(error.message);
      }
    };
    getCategories();
  }, []);



  const cardSize = 'w-[260px] h-[400px] xs:w-[200px] xs:h-[300px] xs2:w-[230px] xs2:h-[350px] md:w-[260px] md:h-[400px]'


  return (
    <main className="lg:flex lg:min-h-[100vh]">
      {error && <ErrorMsg />}
      {products && (
        <>
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
              <Categories categories={categories} flexDirection={'row'} justifyContent={'center'}/>
            </div>
            <div className="my-4 w-full flex flex-col items-center gap-4">
              <div className="flex flex-col gap-2 xs2:flex-row">
              <input
                type="text"
                className="border-2 border-cristaluxBrown w-[300px] sm:w-[400px] py-2 px-4 rounded-md lg:w-[500px]"
                placeholder="Search for products"
              />
              <button className="bg-cristaluxBrown w-[40%] xs2:text-base mx-auto text-xl text-cristalux rounded-md">Search</button>
              </div>
              <div>
              <button className="border-2 border-cristaluxBrown px-5 py-1 text-xl uppercase rounded-md">
                return to all
              </button>
              </div>
            </div>
            <div className="py-10 flex justify-center items-center  flex-wrap gap-x-5 gap-y-5">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} size={cardSize} />
              ))}
            </div>
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
            <div className="flex flex-col items-center justify-center">
              <Categories categories={categories} flexDirection={'column'} />
            </div>
          </aside>
        </>
      )}
    </main>
  );
};

export default Products;
