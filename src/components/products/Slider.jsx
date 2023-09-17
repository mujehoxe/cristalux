import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../../sections/home/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Slider = ({ products }) => {
  const [slidesPerView, setSlidesPerView] = useState(6);
  const [spaceBetween, setSpaceBetween] = useState(20);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setSlidesPerView(1);
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
        setSpaceBetween(10);
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
    <div className="relative slider w-full h-full flex flex-col justify-start">
      <div className="w-[25px] xs2:w-[25px] md:w-[40px] h-[150px] md:h-[200px] bg-cristaluxBrown absolute left-0 top-[50%] translate-y-[-50%] flex items-center justify-start xs2:justify-center">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="cursor-pointer text-white text-sm md:text-2xl"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        />
      </div>
      <div className="w-[25px] xs2:w-[25px] md:w-[40px] h-[150px] md:h-[200px]  bg-cristaluxBrown absolute right-0 top-[50%] translate-y-[-50%] flex items-center justify-end xs2:justify-center">
        <FontAwesomeIcon
          icon={faChevronRight}
          className="cursor-pointer text-white text-sm md:text-2xl"
          onClick={() => swiperRef.current.swiper.slideNext()}
        />
      </div>
      <Swiper
        slidesPerView={slidesPerView}
        ref={swiperRef}
        spaceBetween={spaceBetween}
        className="mySwiper h-full w-[90%] mx-auto"
      >
        {products &&
          products.length &&
          products.map((product) => (
            <SwiperSlide className="" key={product.id}>
              <div className="py-10 mx-auto flex justify-center">
                <ProductCard product={product} />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Slider;
