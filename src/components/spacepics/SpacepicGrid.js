import React from "react";
import SpacePic from "./SpacePic";

const SpacepicGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <SpacePic key={item.date} item={item}></SpacePic>
      ))}
    </section>
  );
};


export default SpacepicGrid;
