import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import "../index.css";

const App = () => {
  return (
    <div className="App">
      <h2>Surreal Estate</h2>
      <NavBar />
      <Routes>
      <Route path="/Properties" element={<Properties />} />
      <Route path="/AddProperty" element={<AddProperty />} />
      </Routes>
    </div>
  );
};

export default App;
