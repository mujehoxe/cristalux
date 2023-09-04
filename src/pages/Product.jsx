import { Link, useParams, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import useFetch from "../components/home/useFetch";
import Loading from "../components/fetch/Loading";
import ErrorMsg from "../components/fetch/ErrorMsg";
import { useState, useEffect } from "react";
import Slider from "../components/products/Slider";

const Product = () => {
  const { data: products } = useFetch("http://localhost:8000/data/");
  const [num, setNum] = useState(1);
  const params = useParams();
  const {
    data: product,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/data/${params.id}`);
  const [currentProduct, setCurrentProduct] = useState(null);

  // console.log(product);

  useEffect(() => {
    if (product) {
      setCurrentProduct(product);
    }
  }, [product]);



  const increase = () => {
    if (num < product.quantity) {
      setNum(num + 1);
    }
  };

  const decrease = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };

  const offerPercentage = product.offer / 100;
  const discountedPrice = product.price * (1 - offerPercentage);

    const dispath = useDispatch();

    const handleAddToCart = (product) => {
      dispath(addToCart(product));
    };
  return (
    <main>
      {isPending && <Loading />}
      {error && <ErrorMsg />}
      {product && (
        <>
          <section className="min-h-[100vh]">
            <div className="sm:text-4xl capitalize font-bold underline py-5 w-[90%] mx-auto">
              <Link to={".."} relative="path">
                {"<"}- back to products
              </Link>
            </div>
            <div className="relative contain my-10 flex items-center w-[90%]  mx-auto  h-[500px] gap-x-[5%]">
              <div className="relative image w-[50%] h-full  ">
                <div className="flex items-center w-full h-full">
                  <div className="pics w-[25%] h-full">
                    {product.imgs &&
                      product.imgs.map((image, index) => (
                        <>
                          <div className="w-full h-[25%]">
                            <img
                              key={index}
                              className="w-full h-full object-cover"
                              src={image}
                              alt={product.name}
                            />
                          </div>
                        </>
                      ))}
                  </div>
                  <div className="pic w-[75%] h-full bg-yellow-300">
                    <img
                      className="w-full h-full object-cover"
                      src={product.thumbnail}
                      alt={product.name}
                    />
                  </div>
                </div>
              </div>
              <div className="py-4 details w-[45%] h-full">
                <h1 className="capitalize text-2xl font-bold">
                  {product.name}
                </h1>
                <div className="py-4 flex items-center gap-x-5">
                  <h2 className="text-xl line-through">{product.price}DA</h2>
                  <h2 className="text-xl">{discountedPrice}DA</h2>
                </div>
                <p>{product.description}</p>
                <div className="py-10 flex items-center gap-x-5">
                  <div className="w-[200px] px-4 h-[40px] border-2 border-[#A3A3A3] flex items-center justify-around">
                    <span className="text-xl cursor-pointer" onClick={decrease}>
                      {"<"}
                    </span>
                    <input
                      value={num}
                      className="w-[30px] mx-auto text-center bg-transparent text-2xl"
                      type="number"
                    />
                    <span className="text-xl cursor-pointer" onClick={increase}>
                      {">"}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="capitalize bg-[#393939] py-2 px-6 rounded-sm text-white"
                  >
                    Add to cart
                  </button>
                  <Link
                    to={"products"}
                    className="capitalize bg-[#393939] py-2 px-6 rounded-sm text-white"
                  >
                    Buy now
                  </Link>
                </div>
                <div className="py-4">
                  <h2 className="text-lg text-[#9B9B9B] capitalize ">
                    category:{" "}
                    <span className="text-base">{product.category}</span>{" "}
                  </h2>
                </div>
                <div className="flex items-center gap-x-5">
                  <Link to={"."} end>
                    Details
                  </Link>
                  <Link to={"preview"}>Preview</Link>
                  <Link to={"moreDetails"}>More Details</Link>
                </div>
                <div className="my-5 h-32">
                  <Outlet context={{ currentProduct }} />
                </div>
              </div>
            </div>
            <div className="w-[90%] mx-auto  min-h-[100px]">
              <h2 className="title text-4xl font-bold">Latest Products</h2>
              <Slider products={products} />
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Product;
