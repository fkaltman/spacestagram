import React from "react";

// function clickLove() {
//   document.getElementById(id).style.color = "#000";
// }

const SpacePic = ({ item }) => {
  return (
    <div className="card">
      <img src={item.url} alt="Astronomy pic of the day from the NASA Api" />
      <div className="card-text">
        <h4>{item.date}</h4>
        <h2 className="title">{item.title}</h2>
        {/* <h4 className="blurb">{item.explanation}</h4> */}
        <button
          id="love"
          className="like-button"
          onClick={(e) => e.target.classList.toggle
            ('like-button-pink')}
        >
          {" "}
          &#10084;
        </button>
      </div>
    </div>
  );
};

export default SpacePic;
