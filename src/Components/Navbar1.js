import React from "react";
import Logo from "./Images/logo.svg";

function Navbar1() {
  return (
    <div className="navbar1">
      <header>
        <img className="logo" src={Logo} alt="code-cooking" />
        <nav>
          <ul className="nav_links">
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
          <button>Contact</button>
        </a>
      </header>
    </div>
  );
}

export default Navbar1;
