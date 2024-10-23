import React from "react";

function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>ANNA'S COSC209 PROJECT</h1>
      </div>
      <div className="nav-links">
        <a href="/">HOME</a>
        <a href="/about">About ME</a>
        <a href="/contact">CONTACT ME</a>
      </div>
    </nav>
  );
}

export default Nav;
