import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero w-full h-[100vh] bg-black">
      <div className="contain w-[90%] h-full  mx-auto text-center flex items-center justify-center">
        <div>
          <h1 className="title text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cristalux capitalize">
            Tout pour votre maison
          </h1>
          <p className="text-cristalux  xs2:text-base  text-center capitalize text-xs py-5 sm:text-base sm:w-[90%] md:w-[80%] sm:mx-auto md:text-xl lg:text-2xl">
            Bienvenue chez Cristalux, votre destination incontournable pour des
            décorations d{"'"}ntérieur d{"'"}une élégance inégalée.
          </p>
          <Link className="" to={"products"}>
            <button className="lg:my-5 text-cristalux border-2 border-cristalux py-3 px-10 lg:text-xl lg:hover:bg-cristaluxBrown rounded-md transition-all duration-200 ">Voir plus</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero