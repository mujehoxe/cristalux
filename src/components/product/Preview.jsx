import { useOutletContext } from "react-router-dom";

const Preview = () => {
    const { currentProduct } = useOutletContext();

    if (!currentProduct) {
      return <h2>loading ...</h2>;
    }
  return <div>Preview</div>;
};

export default Preview;
