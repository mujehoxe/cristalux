import { motion } from "framer-motion";

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
    <nav className="py-8 flex justify-center items-center gap-x-5 mt-12">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          handlePreviousPage();
          scrollToTop();
        }}
        className={`text-2xl md:text-3xl lg:text-4xl font-bold ${currentPage === 1 ? "text-gray-300" : "text-cristalux"}`}
        disabled={currentPage === 1}
      >
        {"<"}
      </motion.button>
      <div className="flex items-center justify-center space-x-2">
        {pageNumber.map((number) => (
          <motion.div key={number} whileTap={{ scale: 0.9 }}
            onClick={() => {handlePageChange(number); scrollToTop()}}
            className={`w-[30px] h-[30px] flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 ${currentPage === number ? "bg-cristalux text-gray-800 font-bold" : "bg-gray-200 text-gray-600"}`}
          >
            {number}
          </motion.div>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          handleNextPage();
          scrollToTop();
        }}
        className={`text-2xl md:text-3xl lg:text-4xl font-bold ${currentPage === pageNumber.length ? "text-gray-300" : "text-cristalux"}`}
        disabled={currentPage === pageNumber.length}
      >
        {">"}
      </motion.button>
    </nav>
  );
};

export default Pagination;
