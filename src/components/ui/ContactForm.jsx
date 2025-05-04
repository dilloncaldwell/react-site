import React, { useState } from 'react';

export default function ContactForm({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle the form submission, for now we just log the data
    console.log('Form submitted:', formData);

    // You can replace this with your actual submission logic, like sending it to an API or third-party service

    // Trigger success callback if provided
    if (onSubmitSuccess) {
      onSubmitSuccess();
    }
  };

  return (
    <>
      <div className="form-wrapper">
        <h3>Let's Chat</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
          </div>
          <button type="submit" className="tmf-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
