import React from "react";
import Globe from "../images/globe.png";

export default function Nav() {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <img src={Globe} className="globe" alt=" a globe" />
        my travel journal
      </div>
    </nav>
  );
}
