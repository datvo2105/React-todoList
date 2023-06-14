import React from "react";

function Header() {
  const styleHeader = {
    fontSize: "34px",
    fontWeight: 700,

    padding: "10px 0",
    borderBottom: "4px solid #ccc",
  };
  return (
    <header>
      <h1 style={styleHeader}>Tasks for today</h1>
    </header>
  );
}

export default Header;
