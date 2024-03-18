import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faMapMarkerAlt,
  faMoneyBillWave,
  faBuilding,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/property-card.css";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      <h2>{title}</h2>
      <div className="property-info">
        <p>
          <FontAwesomeIcon icon={faBuilding} /> {type} 
        </p>
        <p>
          <FontAwesomeIcon icon={faBath} /> {bathrooms}
        </p>
        <p>
          <FontAwesomeIcon icon={faBed} /> {bedrooms}
        </p>
        <p>
          <FontAwesomeIcon icon={faMoneyBillWave} /> {price}
        </p>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> {city}
        </p>
      </div>
      <div className="contact-info">
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> Email: {email}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
