import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <h1>Employee Directory</h1>
      <p>Type in the search bar to search through the Directory</p>
      <p>Click on Name or D.O.B to sort by respective column</p>
    </div>
  );
}


export default Header;