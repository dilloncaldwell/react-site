import React from 'react';
import metadata from '/src/content/Locations/metadata.json'; // Import preprocessed metadata

const LocationArchive = () => {
  return (
    <div className="location-archive">
      <h1>Our Locations</h1>
      <div className="location-list">
        {metadata.map((location) => (
          <div key={location.slug} className="location-card">
            <h2>{location.name}</h2>
            <p>{location.address}</p>
            <p>
              <a href={`tel:${location.phone}`}>{location.phone}</a>
            </p>
            <p>
              <a href={`mailto:${location.email}`}>{location.email}</a>
            </p>
            <p>{location.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationArchive;
