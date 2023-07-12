import { Link } from "react-router-dom";

const Why = ({ title, image, paragraph, link, linkText, flexRowReverse }) => {
  const flexDirection = flexRowReverse ? "row-reverse" : "row";
  return (
    <div
      style={{ flexDirection }}
      className="md:flex md:items-center md:justify-center md:w-[90%] mx-auto py-5"
    >
      <div className="text-center md:w-[50%]">
        <h2 className="text-4xl uppercase font-bold lg:text-5xl">{title}</h2>
        <p className="py-4 lg:py-7 capitalize text-xs w-[80%] mx-auto sm:text-sm lg:text-base">
          {paragraph}
        </p>
        <Link
          to={link}
          className="border-2 border-[#272727] text-xl py-2 lg:py-3 px-6 text-[#272727]"
        >
          {linkText}
        </Link>
      </div>
      <div className="md:w-[60%] mx-auto py-10">
        <img
          className="my-5 w-[90%] mx-auto shadow-xl object-cover"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Why