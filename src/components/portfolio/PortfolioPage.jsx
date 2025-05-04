import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Section from '../common/Section';
import usePageTitle from '../hooks/usePageTitle';
import Sidebar from '../sidebar/Sidebar';
import PageTitleBar from '../titlebar/PageTitleBar';
import metadata from '/src/content/Portfolio/metadata.json';

const Portfolio = () => {
  const [content, setContent] = useState({}); // Store content for all sections

  usePageTitle('Portfolio');

  useEffect(() => {
    const contentData = {};
    metadata.forEach((file) => {
      contentData[file.slug] = file.content;
    });
    setContent(contentData);
  }, []);

  return (
    <>
      <PageTitleBar title="Portfolio" />
      <Section baseId="body" role="main">
        <Section.Row collapse={1050}>
          <Section.Cell span={16}>
            <div className="page-content">
              <ReactMarkdown>{content['portfolio-body']}</ReactMarkdown>
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

export default Portfolio;
