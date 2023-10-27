import React from 'react'
import CV from '../../assets/CV/cv2023norbertoalvarezen.pdf'

const CTA = () => {
  return (
    <div className='CTA'>
       {/*  si quiero que el archivo se guarde solamente agregar download en la etiqueta */}
        <a href={CV} className='btn' target='_blank'> Download CV</a> 
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA