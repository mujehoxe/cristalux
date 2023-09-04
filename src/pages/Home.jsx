import Hero from "../sections/home/Hero"
import LatestProducts from "../sections/home/LatestProducts"
import useFetch from '../components/home/useFetch'
import Loading from "../components/fetch/Loading";
import ErrorMsg from "../components/fetch/ErrorMsg";
import About from '../sections/home/About'
import Whyus from "../sections/home/Whyus";
import Order from "../sections/home/Order";
import Features from "../sections/home/Features";
import { useEffect, useState } from "react";


const Home = () => {
  const [ products, setProducts ] = useState([]);
  const [ error, setError ] = useState(false)
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetch("https://api.cristalux.store/api/v1/latest-products/");
            const prodcuts = await data.json();
            setProducts(prodcuts);
        } catch (error) {
              setError(error.message);
            }
          };
          getProducts();
        }, []);

  return (
    <main>
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