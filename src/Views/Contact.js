//functional component
import React from 'react';
import '../Style/App.css';

//contact information
const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>Email: info@example.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 123 Street, City, Country</p>
      </div>
    </div>
  );
}

export default Contact;
