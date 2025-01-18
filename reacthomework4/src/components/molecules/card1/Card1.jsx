import React from "react";
import "./Card1.css";
import CardSvg1 from "../../atoms/cardSvg1/CardSvg1.jsx";
import CardScore1 from "../../atoms/cardScore1/CardScore1.jsx";
import CardName1 from "../../atoms/cardName1/CardName1.jsx";
import CardOutOf from "../../atoms/cardOutOf/CardOutOf.jsx";

function Card1() {
  return (
    <>
      <div className="card">
        <div className="div1">
          <CardSvg1 />
          <CardName1 />
        </div>
        <div className="div2">
          <CardScore1 />
          <CardOutOf />
        </div>
      </div>
    </>
  );
}

export default Card1;
