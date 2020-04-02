import React from "react";
import brave from "../../Images/brave.png";
import header from "./Header.module.css";

const Header = () => {
  return (
    <header className={header.header}>
      <img src={brave} alt="hello" />
      <h4>Grid social</h4>
    </header>
  );
};

export default Header;
