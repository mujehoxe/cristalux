const Categories = ({
  flexDirection,
  justifyContent,
  categories,
  selectedCategory,
  setSelectedCategory,
  setMode,
}) => {
  return (
    <div
      style={{ flexDirection: flexDirection, justifyContent: justifyContent }}
      className="flex gap-2 flex-wrap items-center "
    >
      {categories &&
        categories.map((cat) => (
          <button
            key={cat.id}
            className={`bg-cristaluxBrown capitalize  text-cristalux md:w-[10%] lg:w-[40%] py-2 w-[25%] sm:w-[20%] rounded-md font-semibold${
              selectedCategory === cat.id
                ? "bg-red-950 text-white lg:bg-cristalux lg:text-cristaluxBrown font-bold"
                : ""
            }`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      {selectedCategory && (
        <button
          className={`${
            selectedCategory ? "bg-cristaluxBrown text-white" : ""
          } px-4 capitalize font-semibold py-2 rounded-md`}
          onClick={() => {
            setSelectedCategory(null);
            setMode("all");
          }}
        >
          return all{" "}
        </button>
      )}
    </div>
  );
};

export default Categories;
