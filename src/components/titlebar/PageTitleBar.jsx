import React from 'react';
import Section from '../common/Section';

function PageTitleBar({ title }) {
  return (
    <Section baseId="int-title">
      <div className="int-title-content">
        <h1 id="page-title">{title}</h1>
      </div>
    </Section>
  );
}

export default PageTitleBar;
