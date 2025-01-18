import React from "react";
import "../../molecules/cards/Cards.css";
import Card1 from "../card1/Card1.jsx"
import Card2 from "../card2/Card2.jsx";
import Card3 from "../card3/Card3.jsx";
import Card4 from "../card4/Card4.jsx";
function Cards() {
  return (
    <>
      <div className="cards">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
    </>
  );
}

export default Cards;
