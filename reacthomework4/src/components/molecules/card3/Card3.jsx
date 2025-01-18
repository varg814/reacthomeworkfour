import React from "react";
import "./Card3.css";
import CardSvg3 from "../../atoms/cardSvg3/CardSvg3.jsx";
import CardScore3 from "../../atoms/cardScore3/CardScore3.jsx";
import CardName3 from "../../atoms/cardName3/CardName3.jsx";
import CardOutOf from "../../atoms/cardOutOf/CardOutOf.jsx";

function Card3() {
  return (
    <>
      <div className="card card3">
        <div className="div1">
          <CardSvg3 />
          <CardName3 />
        </div>
        <div className="div2">
          <CardScore3 />
          <CardOutOf />
        </div>
      </div>
    </>
  );
}

export default Card3;
