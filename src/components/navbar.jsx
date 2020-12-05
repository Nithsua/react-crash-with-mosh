import React from "react";

const NavBar = ({ total }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        NavBar
        <span className="badge badge-pill badge-secondary">{total}</span>
      </a>
    </nav>
  );
};

export default NavBar;
