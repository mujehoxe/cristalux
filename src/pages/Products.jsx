import { useState } from "react"
import { useSearchParams } from "react-router-dom";
import useFetch from '../components/home/useFetch'
import ErrorMsg from "../components/fetch/ErrorMsg";
import Loading from "../components/fetch/Loading";
import up from '../assets/imgs/up.png'
import down from '../assets/imgs/down.png'
import ProductCard from '../sections/home/ProductCard'
import Pagination from "../components/products/Pagination";
const Products = () => {
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ searchTerm, setSearchTerm ] = useState("")
  const [ catSearch, setCatSearch ] = useState("")
  const [ menuToggle, setMenuToggle ] = useState(false);
  const [ searchParams, setSearchParams ] = useSearchParams()
  
  const productsPerPage = 12
  const apiUrl = `https://api.cristalux.store/api/v1/products/?page=${currentPage}`;
  console.log(apiUrl);

  const {
    data: products,
    isPending,
    error,
  } = useFetch(apiUrl);
  console.log(products);

      const indexOfLastProduct = currentPage * productsPerPage;
      const indexOfFirstPost = indexOfLastProduct - productsPerPage;
      const currentProducts = products.slice(
        indexOfFirstPost,
        indexOfLastProduct
      );

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
  // const searchedProducts = products.filter((product) =>
  //   product.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  
  // const typeFilter = searchParams.get("category");
  
  // const filteredData = typeFilter
  //   ? searchedProducts.filter(
  //       (product) => product.category.toLowerCase() === typeFilter.toLowerCase()
  //     )
  //     : searchedProducts;



      
  //     const searchedCatProducts = products.filter((product) =>
  //       product.category.toLowerCase().includes(catSearch.toLowerCase())
  //     );

    // const handleSearchName = (event) => {
    //       setSearchTerm(event.target.value);
    //     };

    // const handleCatSearch = (event) => {
    //       setCatSearch(event.target.value);
    //     };

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
                Showing 
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
                {/* {[...new Set(products.map((product) => product.category))].map(
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
                        <h2
                          onClick={() =>
                            setSearchParams({ cat: `${category}` })
                          }
                          className="text-cristalux capitalize text-2xl py-2"
                        >
                          {category}
                        </h2>
                      </div>
                    );
                  }
                )}
                ; */}
              </div>
            </div>
            <div className="w-[70%] mx-auto">
              <input
                type="text"
                placeholder="search for products"
                value={searchTerm}
                // onChange={handleSearchName}
                className="border-2 border-black w-full rounded-md px-2 py-1 capitalize"
              />
            </div>
            <div className="py-10 lg:w-[80%] mx-auto flex items-center justify-center flex-wrap gap-x-5 gap-y-5">
              {currentProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
            {/* <Pagination
              productsPerPage={productsPerPage}
              totalProducts={filteredData.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            /> */}
          </section>
          {/* <aside className="lg:w-[20%] max-sm:hidden sm:hidden md:hidden lg:block">
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
              {[
                ...new Set(
                  searchedCatProducts.map((product) => product.category)
                ),
              ].map((category) => {
                const productCat = products.find(
                  (product) => product.category === category
                );

                return (
                  <div key={category}>
                    <h2
                      onClick={() =>
                        setSearchParams({ category: `${category}` })
                      }
                      className="text-cristalux capitalize text-lg py-2 cursor-pointer"
                    >
                      {category}
                    </h2>
                  </div>
                );
              })}
              {typeFilter ? (
                <button
                  className="bg-black text-white py-1 px-4 rounded-md shadow-md font-bold"
                  onClick={() => setSearchParams({})}
                >
                  All vans
                </button>
              ) : null}
            </div>
          </aside> */}
        </>
      )}
    </main>
  );
}

export default Products