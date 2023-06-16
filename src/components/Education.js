import React, { useState } from "react";

function Education() {
  const [education] = useState([
    {
      icon: "fas fa-graduation-cap",
      title: " Graduation-B.Tech (CSE)",
      desc: "BPSMV, Khanpur Kalan Sonipat",
      CGPA: "74.1%",
      active: false,
    },
    {
      icon: "fas fa-user-graduate",
      title: "Senior Secondary",
      desc: "S.B.H Sr. Sec. School",
      CGPA: "80.6%",
      active: true,
    },
    {
      icon: "fas fa-school",
      title: "Secondary School",
      desc: "Kanya Gurukul Sr. Sec. School",
      CGPA: "83%",
      active: false,
    },
  ]);


  
  const [showAllSkills, setShowAllSkills] = useState(false);

  const skillsData = [
    { name: 'React.js', description: 'Front-end Framework' },
    { name: 'JavaScript', description: 'Programming Language' },
    { name: 'HTML5', description: 'Markup Language' },
    { name: 'CSS3', description: 'Styling Language' },
    { name: 'MongoDB', description: 'NoSQL Database' },
    { name: 'Node.js', description: 'JavaScript Runtime' },
    { name: 'Python', description: 'Programming Language' },
    { name: 'Express.js', description: 'Node.js Web Framework' },
    { name: 'Java', description: 'Programming Language' },
    { name: 'C++', description: 'Programming Language' },
  ];

  const visibleSkills = showAllSkills ? skillsData : skillsData.slice(0, 4);

  const handleToggle = () => {
    setShowAllSkills(!showAllSkills);
  };

  return (
    <section className="education" id="education">
      <div className="container">
        <h1 style={{fontSize:"35px", margin:"20px"}}> Education </h1>
        <div className="services" id="services">

          {education.map((education, i) => (
            <div
              key={i}
              className={`service ${education.active ? "active" : ""}`}
            >
              <i className={`fas ${education.icon}`} />
              <h3>{education.title}</h3>
              <p>{education.desc}</p>
              <h6>Marks: {education.CGPA}</h6>
            </div>
          ))}
        </div>
        <div className="skills" id="skills">
           <div className="skills-heading" > 
              SKILLS
           </div>
           <div className="skills">
      {visibleSkills.map((skill, index) => (
        <div className="skill" key={index}>
          <h4>{skill.name}</h4>
          <p>{skill.description}</p>
        </div>
      ))}
      
      {skillsData.length > 4 && (
        <button className="skill-btn" onClick={handleToggle}>
          {showAllSkills ? 'Less' : 'More'}
        </button>
      )}
      
    </div>

        </div>
      </div>
    </section>
  );
}

export default Education;

