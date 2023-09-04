import { Link } from "react-router-dom";

const Why = ({ title, image, paragraph, link, linkText, flexRowReverse }) => {
  const flexDirection = flexRowReverse ? "row-reverse" : "row";
  return (
    <div
      style={{ flexDirection }}
      className="h-[100vh]  flex-col  justify-center md:flex md:items-center md:justify-center md:w-[95%] md:gap-x-5 mx-auto py-5"
    >
      <div className="relative h-[30%]  text-center md:w-[50%]">
        <h2 className="text-4xl uppercase font-bold lg:text-5xl">{title}</h2>
        <p className="py-4 lg:py-7 capitalize text-xs w-[80%] mx-auto sm:text-sm lg:text-base">
          {paragraph}
        </p>
        <Link
          to={link}
          className="bg-cristaluxBrown text-xl py-3 lg:py-3 px-6 text-cristalux rounded-md"
        >
          {linkText}
        </Link>
      </div>
      <div className="sm:w-[70%] md:w-[70%] h-[70%] md:h-[90%] lg:h-[100%] mx-auto flex flex-col justify-center py-5">
        <img
          className="my-5 w-[90%] h-[90%]  mx-auto shadow-xl object-cover rounded-md"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Why