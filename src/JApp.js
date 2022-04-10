import React from "react";
import JCard from "./Components/JCard";
import JNavbar from "./Components/JNavbar";
import JData from "./Components/JData";

export default function JApp() {
  const card = JData.map((item) => {
    return <JCard item={item} />;
  });
  return (
    <div>
      <JNavbar />
      <section className="location-cards">{card}</section>
    </div>
  );
}
