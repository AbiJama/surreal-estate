import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import "../styles/add-property.css";

const initialState = {
  title: "",
  city: "Manchester",
  type: "Flat",
  bedrooms: "",
  bathrooms: "",
  price: "",
  email: "",
};

const AddProperty = () => {
  const [fields, setFields] = useState(initialState);
  const [alert, setAlert] = useState({
    message: "",
    isSuccess: false,
  });

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });

    axios
      .post("http://localhost:3000/api/v1/PropertyListing", fields)
      .then((response) => {
        setAlert({
          message: "Property Added",
          isSuccess: true,
        });
      })

      .catch((error) => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  };

  const handleFieldChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty}>
        <div>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
              placeholder="Enter property description"
            />
          </label>
        </div>

        <div>
          <label htmlFor="city">
            City
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
              <option value="London">London</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="type">
            Type
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="price">
            Price
            <input
              type="text"
              id="price"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
              placeholder="Enter property price"
            />
          </label>
        </div>

        <div>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
              placeholder="Enter email address"
            />
          </label>
        </div>

        <button type="submit">Add</button>
        <Alert message={alert.message} success={alert.isSuccess} />
      </form>
    </div>
  );
};

export default AddProperty;
