import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="h-[100vh]">
      <div className="relative about w-full h-[150px] md:h-full flex items-center justify-center">
        <div className="text-center z-10">
          <p className="text-sm text-white py-4 capitalize">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
            fugiat.
          </p>
          <Link
            className="text-white border-2 py-2 px-6 text-xl capitalize font-bold "
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