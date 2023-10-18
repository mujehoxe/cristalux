import { Link } from "react-router-dom";

const ErrorMsg = () => {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center overlay">
      <div className="w-[50%] h-[50%] bg-white rounded-md flex items-center justify-center flex-col gap-4">
        <h1 className="text-cristaluxBrown capitalize text-2xl font-bold">
          nous rencontrons une erreur, essayez d{"'"}actualiser
        </h1>
        <Link
          to={"/"}
          className="capitalize bg-cristaluxBrown text-cristalux py-1 px-5 rounded-md"
        >
          go to home
        </Link>
      </div>
    </div>
  );
};

export default ErrorMsg;
