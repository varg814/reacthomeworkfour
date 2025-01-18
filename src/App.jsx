import React from "react";
import "./App.css";
import LeftSection from "./components/organisms/leftSection/LeftSection.jsx";
import RightSection from "./components/organisms/rightSection/RightSection.jsx";

function App() {
  return (
    <>
      <div className="container">
        <LeftSection />
        <RightSection />
      </div>
    </>
  );
}

export default App;
