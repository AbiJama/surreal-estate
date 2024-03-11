import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import "../index.css";
import PropertyCard from "./PropertyCard";

const App = () => {
  return (
    <div className="App">
      <h2>Surreal Estate</h2>
      <NavBar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/AddProperty" element={<AddProperty />} />
        <Route path="/PropertyCard" element={<PropertyCard />} />
      </Routes>
    </div>
  );
};

export default App;
