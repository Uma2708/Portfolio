import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Certificates.css';

const certificatesData = [
  {
    title: "MERN Stack",
    description: "Pepcoding MERN Stack Certificate.",
    image: "/projects/certificate1.png",
    link: "https://drive.google.com/file/d/1wtQqGwKHdLWYtAr88yNr9HwT8NTubRgc/view"
  },
 
  {
    title: "Responsive Web Design",
    description: "FreeCodeCamp Responsive Web Design",
    image: "/projects/certificate3.png",
    link: "https://www.freecodecamp.org/certification/uma_bhardwaj/responsive-web-design"
  },
  {
    title: "Web Developement",
    description: "Internshala Web Developement Certificate.",
    image: "/projects/certificate2.png",
    link: "https://drive.google.com/file/d/1MUUhTWI0rqPFMQO6lmpFqgojT4WD3VgC/view"
  },
  {
    title: "Javascript",
    description:"FreeCodeCamp Javascript Certificate.",
    image: "/projects/certificate4.png",
    link: "https://www.freecodecamp.org/certification/uma_bhardwaj/javascript-algorithms-and-data-structures"
  },
  {
    title: "Python",
    description: "Python Training Certificate",
    image: "/projects/certificate5.png",
    link: "https://drive.google.com/file/d/1N77cTVlNGEnhXyxNG6hs0hBvIH5n75z1/view"
  },
  {
    title: "Problem Solving",
    description: "Hacker Rank Problem Solving",
    image: "/projects/certificate6.png",
    link: "https://www.hackerrank.com/certificates/f3fb6d71dc34"
  },
  // Add more certificate objects as needed
];

const CertificateList = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 4 >= 0 ? prevIndex - 4 : 0
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 4 < certificatesData.length ? prevIndex + 4 : prevIndex
    );
  };

  const visibleCertificates = certificatesData.slice(startIndex, startIndex + 4);

  return (
    <section className="skill1" id="skill1">
    <div className="certificates" id="certificates">
      <div className="title">
        <h3>Certificates</h3>
        <div className="navigation">
          <button className="arrow-btn" onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <button className="arrow-btn" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="certificate-list">
        {visibleCertificates.map((certificate, index) => (
          <div className="certificate-item" key={index}>
            <img src={certificate.image} alt={certificate.title} />
            <h3>{certificate.title}</h3>
            <p>{certificate.description}</p>
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default CertificateList;
