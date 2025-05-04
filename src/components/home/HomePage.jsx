import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Section from '../common/Section';
import usePageTitle from '../hooks/usePageTitle';
import Sidebar from '../sidebar/Sidebar';
import Button from '../ui/Button';
import BadgeSlider from './BadgeSlider';
import Hero from './Hero';
import './HomeBadges.css';
import './HomeOurProcess.css';
import HomeTeamMember from './HomeTeamMember';
import metadata from '/src/content/Home/metadata.json';

const Home = () => {
  const [content, setContent] = useState({}); // Store content for all sections

  usePageTitle('Home');

  useEffect(() => {
    const contentData = {};
    metadata.forEach((file) => {
      contentData[file.slug] = file.content;
    });
    setContent(contentData);
  }, []);

  return (
    <>
      <Hero />
      {/* home body */}
      <Section baseId="home-body" role="main">
        <Section.Row collapse={1050}>
          <Section.Cell span={16}>
            <div className="page-content">
              <ReactMarkdown>{content['home-body']}</ReactMarkdown>
            </div>
          </Section.Cell>
          <Section.Cell span={8} role="complementary">
            <Sidebar />
          </Section.Cell>
        </Section.Row>
      </Section>
      {/* home team */}
      <Section baseId="home-team">
        <Section.Row collapse={1050}>
          <Section.Cell span={24}>
            <div className="page-content">
              <ReactMarkdown>{content['home-team']}</ReactMarkdown>
              <HomeTeamMember />
            </div>
          </Section.Cell>
        </Section.Row>
      </Section>
      {/* home our process */}
      <Section baseId="home-our-process">
        <Section.Row collapse={1050}>
          <Section.Cell span={24}>
            <div className="page-content">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content['home-our-process']}</ReactMarkdown>
              <Button to="/contact">Contact Us</Button>
            </div>
          </Section.Cell>
        </Section.Row>
      </Section>
      {/* home badges */}
      <Section baseId="home-badges">
        <Section.Row collapse={1050}>
          <Section.Cell span={24}>
            <div className="page-content">
              <h2>Our Partners</h2>
              <BadgeSlider />
            </div>
          </Section.Cell>
        </Section.Row>
      </Section>
    </>
  );
};

export default Home;
