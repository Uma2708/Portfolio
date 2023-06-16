import React, { useState } from 'react';
// import './AboutMe.css';
// import profileImage from './profile-image.jpg';
const About = () => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleReadMore = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
        <section className="about" id="about">
      <div className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I'm a passionate front-end web developer specializing in React.js and JavaScript. <br/>
              As a fresher, I'm dedicated to creating engaging web experiences.
            </p>
            <p className={isExpanded ? '' : 'hidden-text'}>
              With a strong foundation in JavaScript, I love leveraging React.js to build dynamic and intuitive user interfaces. My goal is to write clean and efficient code that adheres to industry standards.
            </p>
            <p className={isExpanded ? '' : 'hidden-text'}>
              I'm constantly expanding my knowledge and staying up-to-date with the latest trends in front-end development. I'm driven by the opportunity to contribute to meaningful projects and collaborate with like-minded professionals.
            </p>
            <p>
            Thank you for visiting my portfolio!
            </p>
            <button className="read-more-btn" onClick={handleReadMore}>
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
        <div className="about-image">
          <img src="https://img.freepik.com/premium-vector/cute-little-student-girl-cartoon_96373-287.jpg?w=2000" alt="Profile" />
        </div>
      </div>
      </section>
    );
  };
  
  export default About;