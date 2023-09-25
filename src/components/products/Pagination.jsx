const Pagination = ({
  productsPerPage,
  totalProducts,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumber.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageNumber.length) {
      setCurrentPage(currentPage + 1);
    }
  };

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

  return (
    <nav className="py-20 flex justify-center items-center gap-x-5">
      <button
        onClick={() => {
          handlePreviousPage();
          scrollToTop();
        }}
        className="text-4xl font-bold"
      >
        {"<"}
      </button>
      <div>
        <ul className="flex justify-center items-center gap-x-5 cursor-pointer mt-10">
          {pageNumber.map((number) => (
            <li key={number}>
              <div
                className={`${
                  currentPage === number ? "bg-cristaluxBrown" : "bg-gray-400"
                } w-[20px] h-[20px] rounded-[50%] `}
                onClick={() => {handlePageChange(number)
                                  scrollToTop()}}
              ></div>
            </li>
          ))}
        </ul>
        <ul className="flex justify-center items-center gap-x-7 mt-2">
          {pageNumber.map((number) => (
            <li key={number}>
              <a
                href="#"
                onClick={() => {handlePageChange(number) 
                                scrollToTop()}}
                className={`${
                  currentPage === number
                    ? "text-cristaluxBrown font-bold"
                    : "text-[#7C7C7C]"
                } text-xl`}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => {handleNextPage()
                              scrollToTop()}} className="text-4xl font-bold">
        {">"}
      </button>
    </nav>
  );
};

export default Pagination;
