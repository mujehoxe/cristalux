import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="h-[100vh] pt-16 w-full about">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="text-center z-10 ">
          <p className="text-sm text-cristalux py-10 capitalize md:w-[80%] md:text-2xl lg:w-[70%] lg:text-3xl lg:leading-[40px] xs:w-[90%] xs:mx-auto xs:text-sm xs2:text-base sm:text-xl">
            Bienvenue chez notre magasin de décoration maison. Nous vous
            proposons une sélection soigneuse pour créer un espace élégant et
            accueillant chez vous.
          </p>
          <Link
            className="text-cristalux border-2 border-cristalux py-2 px-6  md:text-3xl capitalize font-bold lg:text-2xl lg:hover:bg-cristaluxBrown transition-all duration-300 rounded-md"
            to={"products"}
          >
            view more
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About