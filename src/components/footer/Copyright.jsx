import React from 'react';
import Section from '../common/Section';
import './Copyright.css';

const Copyright = () => {
  const year = new Date().getFullYear();

  return (
    <Section baseId="copyright">
      <Section.Row collapse={1050}>
        <Section.Cell span={14}>
          <p>
            <span className="copyright">&copy; {year} Your Website Name. All rights reserved.</span>
          </p>
        </Section.Cell>

        <Section.Cell span={10}>
          <p>Website Design by Dillon Caldwell.</p>
        </Section.Cell>
      </Section.Row>
    </Section>
  );
};

export default Copyright;
