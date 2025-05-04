import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import Section from '../common/Section';
import Sidebar from '../sidebar/Sidebar';
import Accordion from '../ui/Accordion';
import './TeamBio.css';
import metadata from '/src/content/Team/metadata.json'; // Import preprocessed metadata

const TeamMemberBio = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const member = metadata.find((m) => m.slug === slug); // Find the member by slug
  const [openAccordion, setOpenAccordion] = useState(0);

  if (!member) return <p>Member not found</p>;

  return (
    <>
      <Section baseId="attorney-bio">
        <Section.Row collapse={950}>
          <Section.Cell span={8}>
            <div className="attorney-bio-img">
              <img src={`/src/assets/images/${member.bio_image}`} alt={member.name} width="400" height="400" />
            </div>
          </Section.Cell>
          <Section.Cell span={16}>
            <div className="attorney-page-title">
              <div className="title-section">
                <h1 className="team-name">{member.name}</h1>
                <div className="team-title">{member.title}</div>
              </div>
            </div>
            <div className="contact-information">
              <div className="phone">{member.phone}</div>
              <div className="email">{member.email}</div>
            </div>
          </Section.Cell>
        </Section.Row>
      </Section>

      <Section baseId="body" role="main">
        <Section.Row collapse={1050}>
          <Section.Cell span={8}>
            <Sidebar />
          </Section.Cell>
          <Section.Cell span={16} role="complementary">
            <div className="page-content">
              <ReactMarkdown>{member.content}</ReactMarkdown>
            </div>
            <div className="extra-content">
              {member.extras.map((extra, index) => (
                <Accordion
                  key={extra.title}
                  title={extra.title}
                  content={extra.content}
                  isOpen={openAccordion === index}
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                />
              ))}
            </div>
          </Section.Cell>
        </Section.Row>
      </Section>
    </>
  );
};

export default TeamMemberBio;
