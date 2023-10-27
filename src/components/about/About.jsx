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
              <small className="about__p">2+ years <br/></small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small className="about__p">1 Client </small>
            </article>
            <article className="about__card">
              <BsFolderCheck className="about__icon"/>
              <h5>Projects</h5>
              <small className="about__p">10+ completed Projects</small>
            </article>
          </div>
          <p>
          I'm a Fullstack Developer in Java and React, Lawyer and Business Analyst.
          I stand out in communication and negotiation, making me a well-rounded professional who can bridge the 
          gap between technology and business needs.       
          Let's connect and explore how I can add value to your projects and ventures.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
