import Hero from "../sections/home/Hero";
import LatestProducts from "../sections/home/LatestProducts";
import About from "../sections/home/About";
import Whyus from "../sections/home/Whyus";
import Order from "../sections/home/Order";
import Features from "../sections/home/Features";
import logoSvg from "../assets/imgs/logoSvg.svg";
import Transition from "../components/framerMotion/Transition";


const Home = () => {

  return (
    <main>
      <Transition  />
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
