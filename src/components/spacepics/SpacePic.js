import React from "react";
// import { FaHotdog } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHeart } from "@fortawesome/free-solid-svg-icons";

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
        <button
          id="love"
          className="like-button"
          onClick={(e) => e.target.classList.toggle("like-button-pink")}
        >
          {""}
          <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
          {/* <FaHotdog /> */}
        </button>
      </div>
    </div>
  );
};

export default SpacePic;
