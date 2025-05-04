import React from 'react';
import ReactMarkdown from 'react-markdown';

const Accordion = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="accordion">
      <div className={`accordion-header ${isOpen ? 'active' : ''}`} onClick={onClick}>
        <div className="title">{title}</div>
        <span className="acc-icon">{isOpen ? '-' : '+'}</span>
      </div>
      {/* {isOpen && (
        <div className="accordion-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      )} */}
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Accordion;
