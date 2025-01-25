// src/components/About.js
import React from 'react';
import './About.css'; // Add specific styles for the About section

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        Hi, I'm <strong>Samruddhi Malvankar</strong>, a passionate Software Developer specializing in web technologies. I enjoy creating responsive and user-friendly websites.
      </p>
      <div className="contact-details">
        <h2>Contact Details</h2>
        <ul>
          <li><strong>Email:</strong> samruddhimalvankar7@gmail.com</li>
          <li><strong>Phone:</strong> +91-9685866585</li>
          <li><strong>Location:</strong> Pune, Maharashtra</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
