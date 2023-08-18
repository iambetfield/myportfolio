import React from "react";
import "./about.css";
import MEside from "../../assets/side.jpeg";
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'

const About = () => {
  return (
    <section id="about" className="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MEside} alt="About img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>2+ years <br/></small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>10+ Clients <br/>Last Year</small>
            </article>
            <article className="about__card">
              <BsFolderCheck className="about__icon"/>
              <h5>Projects</h5>
              <small>20+ completed Projects</small>
            </article>
          </div>
          <p>
          I'm a Fullstack Developer with a legal background, merging skills mainly in Java and Next.js. My knowledge complements my aptitude for assertive communication and skilled negotiation, crafting robust and innovative web solutions. Let's collaborate and bring new projects to life!
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
