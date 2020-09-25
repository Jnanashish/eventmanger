import React from "react";

import { FaHome, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar navbar-dark bg-primary">
        <h1 className="navbar-brand ml-2">Event Manager</h1>
        <ul className="navbar-nav mr-auto mr-2" />
        <li
          className="nav-link navbar-light mr-1"
          style={{ cursor: "pointer" }}
        >
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <FaHome className="icon mr-1 mb-1" />
            Home
          </Link>
        </li>
        <li className="nav-link navbar-light" style={{ cursor: "pointer" }}>
          <Link to="/add" style={{ color: "white", textDecoration: "none" }}>
            <FaPlus className="icon mr-1 mb-1" />
            Add
          </Link>
        </li>
        <ul />
      </div>
    </div>
  );
}

export default Navbar;
