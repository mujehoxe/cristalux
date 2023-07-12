
const Feature = ({ image, title, paragraph }) => {
  return (
    <div className="bg-gradient-to-br from-[#F5F2EB] to-[#F7E6CB] w-[350px] mx-auto h-[240px] rounded-[10%] py-4 my-10 shadow-lg shadow-cristalux cursor-pointer px-6 cardHover duration-300 hover:bg-gradient-to-r hover:from-black hover:text-white text-center">
      <div className="md:w-[20%] w-[30%] bg-cristalux h-[60px] mx-auto flex items-center justify-center rounded-md mt-5">
        <img 
        src={image} 
        className="w-[45px]"
        alt={title} />
      </div>
      <h3 className=" py-2 font-bold text-xl capitalize">{title}</h3>
      <p className="text-xs">
        {paragraph}
      </p>
    </div>
  );
}

export default Feature