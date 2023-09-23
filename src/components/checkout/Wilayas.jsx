import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import wilayasList from "./wilayasList";
import { useDispatch } from "react-redux";
import { setTotal } from "../../features/cartSlice";

const Wilayas = ({ wilaya, setWilaya }) => {
  const [popUp, setPopUp] = useState(false);
  const dispatch = useDispatch();

  const handleItemClick = (wilayaId) => {
    const selectedWilaya = wilayasList.find(
      (selectedWilaya) => selectedWilaya.id === wilayaId
    );
    setWilaya(selectedWilaya);
    console.log(selectedWilaya);
  };

  return (
    <div
      className={`relative flex items-center justify-between border-2 text-cristaluxBrown font-medium border-cristaluxBrown rounded-md shadow-md w-[300px] p-2 u`}
    >
      <h2 className={``}>Wilayas</h2>
      <FontAwesomeIcon
        onClick={() => setPopUp((prev) => !prev)}
        icon={popUp ? faChevronUp : faChevronDown}
      />
      {popUp && (
        <div className="absolute bottom-14 -left-2 shadow-md rounded-md w-[90%] mx-auto bg-white h-[300px] overflow-y-scroll">
          {wilayasList.map((wilaya) => (
            <ul
              key={wilaya.id}
              onClick={() => handleItemClick(wilaya.id)}
              className={`border-2 ${
                setWilaya ? "text-red-300" : ""
              } border-cristaluxBrown p-2 flex items-center justify-between cursor-pointer`}
              // Handle wilaya selection
            >
              <h2 className="text-lg">{wilaya.name}</h2>
              <h2>{wilaya.shippingPrice}DA</h2>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wilayas;
