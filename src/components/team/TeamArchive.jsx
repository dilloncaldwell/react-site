import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../common/Section';
import usePageTitle from '../hooks/usePageTitle';
import Sidebar from '../sidebar/Sidebar';
import PageTitleBar from '../titlebar/PageTitleBar';
import './TeamArchive.css';
import metadata from '/src/content/Team/metadata.json'; // Import preprocessed metadata

const TeamArchive = () => {
  usePageTitle('Meet Our Team');
  return (
    <>
      <PageTitleBar title="Meet Our Team" />
      <Section baseId="body" role="main">
        <Section.Row collapse={1050}>
          <Section.Cell span={16}>
            <div className="page-content">
              <div className="team-list post-list">
                {metadata.map((member) => (
                  <div key={member.slug} className="team-post">
                    {/* Thumbnail Image */}
                    <Link to={`/team/${member.slug}`}>
                      <img
                        className="thumbnail"
                        src={`${import.meta.env.BASE_URL}assets/images/${member.thumbnail_image}`}
                        alt={`${member.name}'s Profile`}
                        width="200"
                        height="200"
                        loading="lazy"
                      />
                    </Link>

                    {/* Name and Title */}
                    <div className="team-member-info">
                      <h2 className="team-name">
                        <Link to={`/team/${member.slug}`}>{member.name}</Link>
                      </h2>
                      <p className="team-title">{member.title}</p>
                    </div>

                    {/* Contact Information */}
                    <div className="contact-info">
                      {member.phone && (
                        <div className="phone phone-1">
                          <span className="label">Phone: </span>
                          <span className="value">
                            <a href={`tel:${member.phone}`}>{member.phone}</a>
                          </span>
                        </div>
                      )}
                      {member.email && (
                        <div className="email">
                          <span className="label">Email: </span>
                          <a className="value" href={`mailto:${member.email}`}>
                            {member.email}
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Excerpt */}
                    <div className="excerpt">
                      <p>{member.content.slice(0, 250)}...</p>
                    </div>

                    {/* Read More Button */}
                    <Link to={`/team/${member.slug}`} className="read-more-button tmf-button">
                      View {member.name}'s Profile
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Section.Cell>
          <Section.Cell span={8} role="complementary">
            <Sidebar />
          </Section.Cell>
        </Section.Row>
      </Section>
    </>
  );
};

export default TeamArchive;
