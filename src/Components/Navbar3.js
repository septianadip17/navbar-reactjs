import React from "react";
import Logo from "./Images/logo.svg";

function Navbar3() {
  return (
    <div className="navbar3">
      <header>
        <img className="logo3" src={Logo} alt="code-cooking"/>
        <nav className="nav3">
          <ul className="nav_links3">
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
        <a className="cta3" href="#">
          <button className="button3">Contact</button>
        </a>
      </header>
    </div>
  );
}

export default Navbar3;
