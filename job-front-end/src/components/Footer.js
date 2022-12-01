import { useState, useEffect } from "react";
import { ReactDOM } from "react";
import "./ComponentStyles.css";
import logo from "src/images/extech-logo.png";

const Footer = () => {
  return (
    <div class="footer">
      <center>
        <img class="img" src={logo} alt="ExTech Logo" width={100}></img>
      </center>
    </div>
  );
}

export default Footer;