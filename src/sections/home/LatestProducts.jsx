import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import right from "../../assets/imgs/right.png";
import left from "../../assets/imgs/left.png";
import ProductCard from "./ProductCard";

const LatestProducts = ({ products }) => {
  const [slidesPerView, setSlidesPerView] = useState(6);
  const [spaceBetween, setSpaceBetween] = useState(20);
  const swiperRef = useRef(null);

  const latestProducts = (products) => {
    const latestProducts = products.slice(0, 7).sort((a, b) => a.id - b.id);
    return latestProducts;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 800) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth < 1200) {
        setSlidesPerView(3);
      } else if (window.innerWidth < 1400) {
        setSlidesPerView(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleSpace = () => {
      if (window.innerWidth < 500) {
        setSpaceBetween(90);
      } else if (window.innerWidth < 800) {
        setSpaceBetween(90);
      } else if (window.innerWidth < 1024) {
        setSpaceBetween(10);
      } else if (window.innerWidth < 1200) {
        setSpaceBetween(100);
      } else if (window.innerWidth < 1400) {
        setSpaceBetween(50);
      }
    };

    window.addEventListener("resize", handleSpace);
    handleSpace();

    return () => {
      window.removeEventListener("resize", handleSpace);
    };
  }, []);

  return (
    <section className="lg:py-10 py-">
      <div className="w-[90%] mx-auto text-center py-5">
        <h2 className="title capitalize text-3xl md:text-5xl  font-bold text-[#373737]">
          Derniers produits
        </h2>
        <p className="capitalize py-1 md:text-base lg:text-lg md:w-[70%] md:mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
          dolor odio odio malesuada at condimentum adipiscing iaculis semper.
        </p>
      </div>
      <div className="relative slider w-full min-h-[400px] flex items-center justify-center">
        <div className="max-sm:hidden w-[50px] h-[150px]  bg-cristalux absolute left-0 top-[50%] translate-y-[-50%] flex items-center justify-center">
          <img
            src={right}
            alt="previous"
            className="cursor-pointer"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          />
        </div>
        <div className="max-sm:hidden w-[50px] h-[150px]  bg-cristalux absolute right-0 top-[50%] translate-y-[-50%] flex items-center justify-center">
          <img
            src={left}
            alt="next"
            className="cursor-pointer"
            onClick={() => swiperRef.current.swiper.slideNext()}
          />
        </div>
        <Swiper
          slidesPerView={slidesPerView}
          ref={swiperRef}
          spaceBetween={spaceBetween}
          className="mySwiper h-full w-[90%] mx-auto"
        >
          {latestProducts(products).map((product) => (
            <SwiperSlide className="" key={product.id}>
              <div className="py-10  mx-auto md:flex md:items-center md:justify-center">
                <ProductCard product={product} />
              </div>
            </SwiperSlide>
          ))}
          <div className="w-[50px] h-[340px] bg-cristalux absolute"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default LatestProducts;
