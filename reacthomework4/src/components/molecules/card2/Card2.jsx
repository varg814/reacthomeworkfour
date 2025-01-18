import React from "react";
import "./Card2.css";
import CardSvg2 from "../../atoms/cardSvg2/CardSvg2.jsx";
import CardScore2 from "../../atoms/cardScore2/CardScore2.jsx";
import CardName2 from "../../atoms/cardName2/CardName2.jsx";
import CardOutOf from "../../atoms/cardOutOf/CardOutOf.jsx";

function Card2() {
  return (
    <>
      <div className="card card2">
        <div className="div1">
          <CardSvg2 />
          <CardName2 />
        </div>
        <div className="div2">
          <CardScore2 />
          <CardOutOf />
        </div>
      </div>
    </>
  );
}

export default Card2;
