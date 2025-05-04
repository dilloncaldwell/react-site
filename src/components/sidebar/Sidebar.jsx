import React from 'react';
import ContactForm from '../ui/ContactForm';

export default function Sidebar() {
  const handleSuccess = () => {
    alert('Message sent from Sidebar!');
  };

  return (
    <div className="sidebar">
      <ContactForm onSubmitSuccess={handleSuccess} />
    </div>
  );
}
