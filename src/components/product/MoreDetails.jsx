import { useOutletContext } from "react-router-dom";

const MoreDetails = () => {
    const { currentProduct } = useOutletContext();

    if (!currentProduct) {
      return <h2>loading ...</h2>;
    }
  return <div>MoreDetails</div>;
};

export default MoreDetails;
