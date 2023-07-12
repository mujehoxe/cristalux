import Hero from "../sections/home/Hero"
import LatestProducts from "../sections/home/LatestProducts"
import useFetch from '../components/home/useFetch'
import Loading from "../components/fetch/Loading";
import ErrorMsg from "../components/fetch/ErrorMsg";
import About from '../sections/home/About'
import Whyus from "../sections/home/Whyus";
import Order from "../sections/home/Order";
import Features from "../sections/home/Features";


const Home = () => {
  const {
    data: products,
    isPending,
    error,
  } = useFetch("http://localhost:8000/data");
  return (
    <main>
      {isPending && <Loading />}
      {error && <ErrorMsg error={error}/>}
      {products && (
        <>
          <Hero />
          <LatestProducts products={products} />
          <About />
          <Whyus />
          <Order />
          <Features />
        </>
      )}
    </main>
  );
}

export default Home