import React from "react";

export default function Navbar({ route, setRoute }) {
  return (
    <nav className="navbar">
      <h2>Box Manager</h2>
      <div className="nav-actions">
        <button
          className={route === "addBox" ? "active" : ""}
          onClick={() => setRoute("addBox")}
        >
          Add Box
        </button>
        <button
          className={route === "boxes" ? "active" : ""}
          onClick={() => setRoute("boxes")}
        >
          Boxes List
        </button>
      </div>
    </nav>
  );
}
