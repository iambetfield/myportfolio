import React from "react";
import "./portfolio.css";
import IMG from "../../assets/captura.png";

import terravis from "../../assets/captura.png";
import automania from "../../assets/automania.png";
import hoobank from "../../assets/hoobank.png";
import apirest from "../../assets/clientdb.png";
import becalled from "../../assets/becalled.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img className="portfolio__img" src={terravis} alt="terravis" />
          </div>
          <h3>Terravis</h3>
          <h5>Airbnb clone</h5>
          <small>Next JS, MongoDB, React</small>
          <div className="portfolio__item-cta">
          <a href="https://github.com/iambetfield/terravis" target="_blank" className="btn">
            {" "}
            Github
          </a>
          <a href="https://terravis.vercel.app/" target="_blank" className="btn btn-primary">
            Live Demo
          </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={automania} alt="pic1" />
          </div>
          <h3>Automania</h3>
          <h5>Landing Rental Car Page</h5>
          <small>React, Next.js, Typescript</small>
          <div className="portfolio__item-cta">
          <a href="https://github.com/iambetfield/automania" target="_blank" className="btn">
            {" "}
            Github
          </a>
          <a href="https://automania-xi.vercel.app/" target="_blank" className="btn btn-primary">
            Live Demo
          </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={becalled} alt="pic1" />
          </div>
          <h3>Becalled</h3>
          <h5>Video Call App</h5>
          <small>Spring Boot, MySQL, JS, ZegoCloud</small>
          <div className="portfolio__item-cta">
          <a href="https://github.com/iambetfield/becalled" className="btn" target="_blank">
            {" "}
            Github
          </a>
          <a href="https://becalled.vercel.app" className="btn btn-primary" target="_blank">
            Live Demo
          </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={hoobank} alt="pic1" />
          </div>
          <h3>Hoobank</h3>
          <h5>Landing Site for a startup</h5>
          <small>Vite js, React</small>
          <div className="portfolio__item-cta">
          <a href="https://github.com/iambetfield/spa_bank"  target="_blank" className="btn">
            {" "}
            Github
          </a>
          <a href="https://spa-bank.vercel.app/" target="_blank" className="btn btn-primary">
            Live Demo
          </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={apirest} alt="pic1" />
          </div>
          <h3>ClientDB</h3>
          <h5>Full Stack API Rest </h5>
          <small>Spring Boot + MySQL + React on AWS</small>
          <div className="portfolio__item-cta">
          <a href="https://github.com/iambetfield/apirest" className="btn" target="_blank">
            {" "}
            Github
          </a>
          <a href="http://apifront.s3-website.us-east-2.amazonaws.com/" className="btn btn-primary" target="_blank">
            Live Demo
          </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="pic1" />
          </div>
          <h3>Spring Commerce</h3>
          <h5>Full Ecommerce project </h5>
          <small>Spring, MySQL, Thymeleaf</small>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn">
            {" "}
            Github
          </a>
          <a href="https://github.com" className="btn btn-primary">
            Live Demo
          </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
