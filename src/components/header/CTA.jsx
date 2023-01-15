import React from 'react'
import Resume from '../../assets/ShaliniCE_Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} download className='btn down'>Download Resume</a>
      <a href="#contact" className='btn btn-primary touch'>Get in touch with me</a>
    </div>
  )
}

export default CTA
