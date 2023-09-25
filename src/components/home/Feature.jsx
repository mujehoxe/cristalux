
const Feature = ({ image, title, paragraph }) => {
  
  return (
    <div className="bg-cristaluxBrown lg:w-[350px] w-[280px] md:w-[220px]  mx-auto md:h-[240px] rounded-[10%] py-4 my-10 shadow-md shadow-cristaluxBrown cursor-pointer px-6 lg:hover:shadow-lg text-white duration-300  text-center">
      <div className="md:w-[40%] lg:w-[30%] w-[30%] bg-cristalux h-[60px] mx-auto flex items-center justify-center rounded-md mt-5">
        <img 
        src={image} 
        className="w-[45px]"
        alt={title} />
      </div>
      <h3 className=" py-2 font-bold text-xl capitalize md:text-base lg:text-xl">{title}</h3>
      <p className="text-xs  lg:text-sm">
        {paragraph}
      </p>
    </div>
  );
}

export default Feature