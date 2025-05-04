import React from 'react';
import { Link } from 'react-router-dom';
import metadata from '/src/content/Team/metadata.json'; // Import preprocessed metadata
import './HomeTeamMember.css';

const HomeTeamMember = () => {
  return (
    <div className="team-container">
      {metadata.map((member) => (
        <div key={member.slug} className="team-member">
          <Link to={`/team/${member.slug}`}>
            <img src={`${import.meta.env.BASE_URL}assets/images/${member.thumbnail_image}`} alt={member.name} width="200" height="200" loading="lazy" />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomeTeamMember;
