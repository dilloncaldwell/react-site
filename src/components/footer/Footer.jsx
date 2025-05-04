import React from 'react';
import Section from '../common/Section';
import Social from '../ui/Social';
import LocationFooter from './LocationFooter';
import './footer.css';

const Footer = () => {
  return (
    <Section baseId="footer">
      <Section.Row collapse={1050}>
        <Section.Cell span={16}>
          <LocationFooter />
        </Section.Cell>

        <Section.Cell span={8}>
          <h4>Follow Us</h4>
          <Social id={1} />
        </Section.Cell>
      </Section.Row>
    </Section>
  );
};

export default Footer;
