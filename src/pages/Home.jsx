import Hero from "../sections/home/Hero";
import LatestProducts from "../sections/home/LatestProducts";
import About from "../sections/home/About";
import Whyus from "../sections/home/Whyus";
import Order from "../sections/home/Order";
import Features from "../sections/home/Features";


const Home = () => {

  return (
    <main>
        <>
          <Hero />
          <LatestProducts />
          <About />
          <Whyus />
          <Order />
          <Features />
        </>
    </main>
  );
};

export default Home;
