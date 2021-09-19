import React from "react";
import SpacePic from "./SpacePic";

const SpacepicGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {[items].map((item) => (
        <SpacePic key={item.date} item={item}></SpacePic>
      ))}
      {/* 
        {[items].map((item) => (
      <h2>{item.explanation}</h2>
        ))} */}

      {/* {[items].map((item) => (
      <h2>{item.explanation}</h2>
        ))} */}
    </section>
  );
};

export default SpacepicGrid;
