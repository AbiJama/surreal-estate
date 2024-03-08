import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
  const surrealLogoUrl =
    "https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png";

  return (
    <div className="navbar">
      <img src={surrealLogoUrl} alt="Surreal Logo" className="navbar-logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <NavLink to="/Properties">View Properties</NavLink>
        </li>
        <li className="navbar-links-item">
          <NavLink to="/AddProperty">Add a Property</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
