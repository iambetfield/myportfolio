import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom Website Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>E-Commerce Solutions</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lading pages</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Performance Optimizations</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web/App MVP</p>
            </li>
          </ul>


        </article>


        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User Interface Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Social Media Managment</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Visual Branding</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>Market Research</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Brand Positioning</p>
            </li>
          </ul>

          
        </article>


        <article className='service'>
          <div className='service__head'>
            <h3>Startup Counselling</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Business Plan Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Legal Structure Guidance</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Intellectual Property Protection</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Contract Drafting and Review</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Regulatory Compliance</p>
            </li>
          </ul>

          
        </article>

      </div>
      
    </section>
  )
}

export default Services