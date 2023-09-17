import { useEffect, useState } from "react";
import ErrorMsg from "../fetch/ErrorMsg";

const Categories = ({ categories, flexDirection, justifyContent }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      {categories && (
        <div
          style={{
            flexDirection: flexDirection,
            justifyContent: justifyContent,
          }}
          className="flex items-center gap-5"
        >
          {categories.map((cat) => (
            <div className={``} key={cat.id}>
              <button
                className={`bg-cristalux w-[100px] text-center py-1 rounded-md`}
                // onClick={() => {
                //   onClick(cat.id);
                //   setSelectedCategory(cat);
                // }}
              >
                {cat.name}
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Categories;
