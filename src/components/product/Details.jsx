import { useOutletContext } from "react-router-dom";

const Details = () => {

    const { currentProduct } = useOutletContext();

    if (!currentProduct) {
        return <h2>loading ...</h2>;
    }

  return <div>Details</div>;
};

export default Details;
