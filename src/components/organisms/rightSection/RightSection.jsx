import React from "react";
import "./RightSection.css";
import Heading4 from "../../atoms/heading4/Heading4";
import Cards from "../../molecules/cards/Cards.jsx";
import Button from "../../atoms/button/Button.jsx";

function RightSection() {
  return (
    <>
      <div className="rightSection">
        <Heading4 />
        <Cards />
        <Button />
      </div>
    </>
  );
}

export default RightSection;
