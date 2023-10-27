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
            <h3>Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>E-Commerce Solutions</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Landing pages</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Process Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Minimum Viable Product</p>
            </li>
          </ul>


        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Enterprise Solutions</h3>
          </div>

          <ul className='service__list'>
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
              <p>Intellectual Property</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Contract Review</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Regulatory Compliance</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Business Analysis</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Analysis </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Problem-Solving</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Requirement-Gathering</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>Market Research</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Process Modeling</p>
            </li>
          </ul>

          
        </article>


        

      </div>
      
    </section>
  )
}

export default Services