import React from 'react';
import locations from '/src/content/Locations/metadata.json'; // Import the locations metadata

const Social = ({ id }) => {
  // Find the location with the matching id
  const location = locations.find((loc) => loc.id === id);

  if (!location || !location.social_media) {
    return null; // Return nothing if no location or social links are found
  }

  const { social_media } = location;

  return (
    <div className="social-links">
      {social_media.facebook && (
        <a href={social_media.facebook} target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <i className="fab fa-facebook"></i>
          </span>
          <span className="label">Facebook</span>
        </a>
      )}
      {social_media.twitter && (
        <a href={social_media.twitter} target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <i className="fab fa-twitter"></i>
          </span>
          <span className="label">Twitter/X</span>
        </a>
      )}
      {social_media.instagram && (
        <a href={social_media.instagram} target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <i className="fab fa-instagram"></i>
          </span>
          <span className="label">Instagram</span>
        </a>
      )}
      {social_media.linkedin && (
        <a href={social_media.linkedin} target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <i className="fab fa-linkedin"></i>
          </span>
          <span className="label">Linkedin</span>
        </a>
      )}
    </div>
  );
};

export default Social;
