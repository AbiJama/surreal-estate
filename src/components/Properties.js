// Properties.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import Sidebar from "./Sidebar";
import "../styles/properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });
  const { search } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/PropertyListing${search}`,
        );
        const { data } = response;
        setProperties(data);
      } catch (error) {
        setAlert({
          message: "Error fetching property listings. Please try again later.",
        });
      }
    };

    fetchData();
  }, [search]);

  const cities = ["Manchester", "Leeds", "Sheffield", "Liverpool", "London"];

  return (
    <div className="properties-container">
      <Sidebar cities={cities} />
      <div className="property-list">
        {properties.map((property) => (
          <PropertyCard
            key={property._id}
            title={property.title}
            price={property.price}
            bathrooms={property.bathrooms}
            bedrooms={property.bedrooms}
            type={property.type}
            city={property.city}
            email={property.email}
          />
        ))}
      </div>
      <Alert message={alert.message} />
    </div>
  );
};

export default Properties;
