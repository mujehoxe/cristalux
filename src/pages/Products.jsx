import { useState } from "react"
import useFetch from '../components/home/useFetch'
import ErrorMsg from "../components/fetch/ErrorMsg";
import Loading from "../components/fetch/Loading";
import up from '../assets/imgs/up.png'
import down from '../assets/imgs/down.png'
import ProductCard from '../sections/home/ProductCard'
import Pagination from "../components/products/Pagination";
const Products = () => {
  const [ productsPerPage, setProductsPerPage ] = useState(12);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ search, setSearch ] = useState("")
  const [ catSearch, setCatSearch ] = useState("")
  const [ menuToggle, setMenuToggle ] = useState(false);
  const {
    data: products,
    isPending,
    error,
  } = useFetch("http://localhost:8000/data");
  
  const searchedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const searchedCatProducts = products.filter((product) =>
    product.category.toLowerCase().includes(catSearch.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastProduct - productsPerPage;
  const currentProducts = searchedProducts.slice(
    indexOfFirstPost,
    indexOfLastProduct
  );

    const handleSearch = (event) => {
          setSearch(event.target.value);
        };

    const handleCatSearch = (event) => {
          setCatSearch(event.target.value);
        };

  return (
    <main className="lg:flex lg:min-h-[100vh]">
      {isPending && <Loading />}
      {error && <ErrorMsg />}
      {products && (
        <>
          <section className="py-10 lg:w-[80%]">
            <div className="title">
              <h1 className="text-center capitalize text-3xl font-bold">
                nous produits
              </h1>
            </div>
            <div className="w-[90%] mx-auto my-5">
              <p className="text-[#7E7E7E] text-xl">
                Showing {productsPerPage} - {searchedProducts.length}
              </p>
            </div>
            <div
              className={`${
                menuToggle ? "" : ""
              } cats my-5 w-[90%] mx-auto  py-2 lg:hidden `}
            >
              <div
                className={`${
                  menuToggle ? "border-b-0" : ""
                } bg-[#2B2B2B] p-2 flex items-center justify-between border-2 w-[90%] mx-auto`}
              >
                <h2 className="text-2xl capitalize text-cristalux">
                  categories
                </h2>
                <img
                  src={menuToggle ? up : down}
                  className="cursor-pointer w-[30px]"
                  onClick={() => setMenuToggle((prev) => !prev)}
                  alt="menu"
                />
              </div>
              <div
                className={`${
                  menuToggle
                    ? "border-2 border-t-0  bg-black transition-all ease-in duration-300"
                    : ""
                } w-[90%]  mx-auto px-2 transition-all min-h-[10px] ease-out duration-300`}
              >
                {[...new Set(products.map((product) => product.category))].map(
                  (category) => {
                    const productCat = products.find(
                      (product) => product.category === category
                    );

                    return (
                      <div
                        key={category}
                        className={`${
                          menuToggle
                            ? "block transition-all ease-in duration-300"
                            : "hidden  transition-all ease-in duration-300"
                        }`}
                      >
                        <h2 className="text-cristalux capitalize text-2xl py-2">
                          {category}
                        </h2>
                      </div>
                    );
                  }
                )}
                ;
              </div>
            </div>
            <div className="w-[70%] mx-auto">
              <input
                type="text"
                placeholder="search for products"
                value={search}
                onChange={handleSearch}
                className="border-2 border-black w-full rounded-md px-2 py-1 capitalize"
              />
            </div>
            <div className="py-10 lg:w-[80%] mx-auto flex items-center justify-center flex-wrap gap-x-5 gap-y-5">
              {currentProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={searchedProducts.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </section>
          <aside className="lg:w-[20%]">
            <div className="py-10 w-[90%] mx-auto">
              <input
                className="w-full h-[40px] px-2 capitalize border-2 border-cristalux bg-[#2B2B2B] text-white"
                placeholder="search for category.."
                type="text"
                value={catSearch}
                onChange={handleCatSearch}
              />
              <h2 className="py-5 text-cristalux text-2xl capitalize">
                categories
              </h2>
                {[...new Set(searchedCatProducts.map((product) => product.category))].map(
                  (category) => {
                    const productCat = products.find(
                      (product) => product.category === category
                    );

                    return (
                      <div
                        key={category}
                      >
                        <h2 className="text-cristalux capitalize text-lg py-2">
                          {category}
                        </h2>
                      </div>
                    );
                  }
                )}
            </div>
          </aside>
        </>
      )}
    </main>
  );
}

export default Products