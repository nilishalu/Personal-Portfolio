import React from 'react'
import {ImLinkedin2} from 'react-icons/im'
import {FaGithub} from 'react-icons/fa'

const Socials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target = "_blank"><ImLinkedin2 size={40}/></a>
      <a href="https://github.com" target = "_blank"><FaGithub size={40}/></a>
    </div>
  )
}

export default Socials
