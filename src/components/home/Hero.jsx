import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Section from '../common/Section';
import Button from '../ui/Button';
import './Hero.css';
import metadata from '/src/content/Home/metadata.json';

const Hero = () => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const contentData = {};
    metadata.forEach((file) => {
      contentData[file.slug] = file.content;
    });
    setContent(contentData);
  }, []);

  const base = import.meta.env.BASE_URL;
  const heroSmall = `${base}assets/images/hero_small.jpg`;
  const heroMedium = `${base}assets/images/hero_medium.jpg`;
  const heroLarge = `${base}assets/images/hero_large.jpg`;

  return (
    <Section baseId="billboard" role="banner">
      <div className="billboard-slider-container">
        <div className="billboard-slides">
          <div className="slide active">
            <img
              src={heroLarge} // fallback image
              srcSet={`
                ${heroSmall} 500w,
                ${heroMedium} 950w,
                ${heroLarge} 1250w
              `}
              sizes={`
                (max-width: 500px) 100vw,
                (max-width: 950px) 100vw,
                (max-width: 1250px) 100vw,
                1250px
              `}
              alt="billboard 1"
              width="1920"
              height="500"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="billboard-content-container">
        <div className="billboard-content">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content['home-hero']}</ReactMarkdown>
          <Button to="/contact">Contact Us</Button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
