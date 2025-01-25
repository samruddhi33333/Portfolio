// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <section className="home">
      <div className="home-nav">
        <Link to="/about">About Me</Link>
        <Link to="/projects">My Projects</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </section>
  );
}

export default Home;
