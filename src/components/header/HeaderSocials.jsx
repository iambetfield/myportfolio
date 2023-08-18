import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import{SiVercel} from'react-icons/si'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/iambetfield/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/iambetfield' target="_blank"><FaGithub/></a>
        <a href='https://vercel.com/nalvadev' target="_blank"><SiVercel/></a>
        
    </div>
  )
}

export default HeaderSocials