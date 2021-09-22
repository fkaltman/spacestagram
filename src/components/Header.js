import React from "react";
import logo from "../../src/img/spaceship_name.png";

const Header = () => {
  return (
    <header>
      <img className='ship' src={logo} alt="A cute little spaceship cartoon made with the word spacestagram" />
      <h1>Choose your favorite images from January 2020</h1>
    </header> 
  );
};

export default Header;
