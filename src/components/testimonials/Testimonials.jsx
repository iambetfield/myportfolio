import React from "react";
import "./testimonials.css";
import CLIENT from "../../assets/client.jpg";
import CLIENT2 from "../../assets/client2.jpg";


const data =[
  {
    avatar: CLIENT,
    name: 'Tina Show',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius reiciendis odit, blanditiis aliquid nemo ullam adipisci ex repellat dicta tempora?'
  },
  {
    avatar: CLIENT2,
    name: 'Kirk Hammet',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius reiciendis odit, blanditiis aliquid nemo ullam adipisci ex repellat dicta tempora?'
  },
  {
    avatar: CLIENT,
    name: 'James Hetfield',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius reiciendis odit, blanditiis aliquid nemo ullam adipisci ex repellat dicta tempora?'
  },
  {
    avatar: CLIENT2,
    name: 'Dave Ellefson',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius reiciendis odit, blanditiis aliquid nemo ullam adipisci ex repellat dicta tempora?'
  },

]

const Testimonials = () => {
  return (
    <section>
      <h5>Review form Clients</h5>
      <h2>Testimonials</h2>

      
    </section>
  );
};

export default Testimonials;
