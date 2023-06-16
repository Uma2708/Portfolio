import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Project 1",
      desc:" Developed a React-based Movie App that enables real-time movie search using an API Implemented features to add and remove movies from favorites, with data saved to local storage",
      img: "/projects/1.png",
      gLink: "https://github.com/Uma2708/Movie_APP",
      lLink: "https://isnt-uma2708-awesome.netlify.app/",
    },
    {
      title: "Project 2",
      desc:" Created a camera application that captures and stores photos/videos using the device’s camera and indexed DBUtilized JavaScript, HTML, CSS, indexed DB, DOM, and Node.js",
      img: "/projects/2.png",
      gLink: "https://github.com/Uma2708/camera",
      lLink: "https://majestic-pavlova-0ef49a.netlify.app/",
    },
    {
      title: "Project 3",
      desc:"MI Clone using Javascript and Reactjs",
      img: "/projects/3.png",
      gLink: "https://github.com/Uma2708/MI_Store-Clone",
      lLink: "https://gregarious-cucurucho-1c661f.netlify.app/",
    },
    {
      title: "Project 4",
      desc:"FilUploader ",
      img: "/projects/4.png",
      gLink: "https://github.com/Uma2708/Filexchanger",
      lLink: "https://gregarious-cucurucho-1c661f.netlify.app/",
    },
   
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/Uma2708"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
                
              </div>
              <p>
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;