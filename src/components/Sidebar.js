import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = ({ cities }) => {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-list">
        {cities.map((city) => (
          <li key={city} className="sidebar-item">
            <Link to={`/?query={"city": "${city}"}`}>{city}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;