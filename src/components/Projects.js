import React from 'react';

function Projects() {
  return (
    <section style={{ textAlign: 'center', margin: '50px auto', maxWidth: '800px' }}>
      <h2>My Projects</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '20px' }}>
          <strong>Electricity Billing System</strong>: A project using Java for the frontend and MySQL for the backend. It automates electricity billing processes efficiently.
        </li>
        <li style={{ marginBottom: '20px' }}>
          <strong>Client Management System</strong>: A system built with PHP for managing client data, improving organization, and enhancing productivity.
        </li>
      </ul>
    </section>
  );
}

export default Projects;
