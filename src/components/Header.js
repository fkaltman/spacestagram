import React from "react";
import logo from "../../src/img/spaceship.png";

const Header = () => {
  return (
    <header className='center'>
      <img src={logo} alt="A cute little spaceship cartoon made with the word spacestagram" />
    </header> 
  );
};

export default Header;
