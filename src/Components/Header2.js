import React from "react";
import brave from "../brave.png";

const Header = () => {
  return (
    <header className="app-header">
      <img src={brave} alt="hello" />
      <h4>Social network</h4>
    </header>
  );
};

export default Header;
