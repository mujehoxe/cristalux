import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import wilayasList from "./wilayasList";

const Wilayas = ({ cart }) => {
  const [selectedWilaya, setSelectedWilaya] = useState(null);
  const [popUp, setPopUp] = useState(false);

  const handleItemClick = (wilayaId) => {
    const wilaya = wilayasList.find((wilaya) => wilaya.id === wilayaId);
    setSelectedWilaya(wilaya);
    setPopUp(false)
  };

  useEffect(() => {
    // This effect will run after selectedWilaya has been updated
    selectedWilaya
  }, [selectedWilaya]); // Add selectedWilaya as a dependency for the effect

  return (

  );
};

export default Wilayas;
