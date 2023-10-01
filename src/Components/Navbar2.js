import React from "react";
import Logo from "./Images/logo.svg";

function Navbar2() {
  return (
    <div className="navbar2">
      <header className="header2">
        <img className="logo2" src={Logo} alt="code-cooking" />
        <nav>
          <ul className="nav_links2">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <a className="cta" href="#">
          <button className="button2">Contact</button>
        </a>
      </header>
    </div>
  );
}

export default Navbar2;
