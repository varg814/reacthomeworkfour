import React from "react";
import "./Card4.css";
import CardSvg4 from "../../atoms/cardSvg4/CardSvg4.jsx";
import CardScore4 from "../../atoms/cardScore4/CardScore4.jsx";
import CardName4 from "../../atoms/cardName4/CardName4.jsx";
import CardOutOf from "../../atoms/cardOutOf/CardOutOf.jsx";

function Card4() {
  return (
    <>
      <div className="card card4">
        <div className="div1">
          <CardSvg4 />
          <CardName4 />
        </div>
        <div className="div2">
          <CardScore4 />
          <CardOutOf />
        </div>
      </div>
    </>
  );
}

export default Card4;
