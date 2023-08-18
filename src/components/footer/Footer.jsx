import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import{SiVercel} from'react-icons/si'

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>Norberto Alvarez</a>

        <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'> Contact</a></li>
        </ul>

        <div className='footer__socials'>
          <a href='https://www.linkedin.com/in/iambetfield/' target='_blank'><BsLinkedin/></a>
          <a href='https://github.com/iambetfield' target='_blank'><FaGithub/></a>
          <a href='https://vercel.com/nalvadev' target='_blank'><SiVercel/></a>
        </div>
        <div className='footer__copyright'>
          <p><a href='https://www.iternova.com.ar'>Iternova.com.ar</a>  &copy;  - - All rigths reserved</p>
          

        </div>
    </footer>
  )
}

export default Footer