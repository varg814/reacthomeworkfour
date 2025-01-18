import React from "react";
import "./LeftSection.css";
import Heading1 from "../../atoms/heading1/Heading1.jsx";
import Score from "../../molecules/score/Score.jsx";
import GreatText from "../../molecules/greatText/GreatText.jsx";

function LeftSection() {
  return (
    <>
      <div className="leftSection">
        <Heading1 />
        <Score />
        <GreatText />
      </div>
    </>
  );
}

export default LeftSection;
