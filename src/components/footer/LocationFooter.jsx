import React from 'react';
import metadata from '/src/content/Locations/metadata.json';

const LocationFooter = () => {
  return (
    <div className="location-footer">
      <h3>Our Locations</h3>
      <div className="location-post-list">
        {metadata.map((location) => (
          <div className="location-post" key={location.slug}>
            <div className="business-info">
              <div className="business-name">{location.name}</div>
              <div className="address">{location.address}</div>
              <div className="phone phone-1">
                <span className="label">Phone: </span>
                <span className="value">
                  <a href={`tel:${location.phone}`}>{location.phone}</a>
                </span>
              </div>
              <div className="email">
                <span className="label">Email: </span>
                <a className="value" href={`mailto:${location.email}`}>
                  {location.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationFooter;
