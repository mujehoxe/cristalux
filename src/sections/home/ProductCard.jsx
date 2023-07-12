import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const maxLength = 50;
  const limitedText = (text, limit) => {
    if (text.length <= limit) {
      return text;
    } else {
      return text.slice(0, limit) + "...";
    }
  };

  const theLimitedText = limitedText(product.description, maxLength);
  return (
    <>    
      <div className="relative w-[250px] h-[400px] bg-[#F4F5F7]">
        <div className="pic w-full h-[65%]">
          <img
            src={product.thumbnail}
            className="w-full h-full object-cover"
            alt={product.name}
          />
        </div>
        <div className="content w-full h-[35%] p-2">
          <h2 className="capitalize text-xl font-bold">{product.name}</h2>
          <p className="capitalize">{theLimitedText}</p>
          <div className="flex justify-between py-2">
            <h3 className="text-xl font-bold">DA {product.price}</h3>
            <Link
              className=" px-6 py-1 capitalize underline"
              to={"products"}
            >
              vior plus
            </Link>
          </div>
          <div className="w-[50px] h-[50px] bg-black rounded-[50%] absolute -top-[5%] -right-[4%] flex items-center justify-center">
            <h2 className="text-white font-bold">{product.offer}%</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard