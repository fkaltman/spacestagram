import React from "react";
import SpacePic from "./SpacePic";

const SpacepicGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h3 className="loading">Loading...</h3>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <SpacePic key={item.date} item={item}></SpacePic>
      ))}
    </section>
  );
};


export default SpacepicGrid;
