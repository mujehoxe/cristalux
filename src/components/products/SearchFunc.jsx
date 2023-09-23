import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

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

  return (
    <div className="my-4 w-full flex flex-col items-center gap-4">
      <input
        type="text"
        className="border-2 border-cristaluxBrown w-[300px] sm:w-[400px] py-2 px-4 rounded-md lg:w-[500px]"
        placeholder="Search for products"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <button
        className="bg-cristaluxBrown w-[40%] h-10 xs2:text-base mx-auto text-xl text-cristalux rounded-md"
        disabled={isLoading}
        onClick={handleSearchClick}
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
      {mode === "search" && (
      <button className={`bg-cristaluxBrown text-white font-semibold capitalize px-5 py-2 rounded-md`} onClick={() => setMode("all")}>return to all</button>
      )}
    </div>
  );
};

export default SearchFunc;
