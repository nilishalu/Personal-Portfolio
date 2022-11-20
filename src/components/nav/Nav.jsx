import React from 'react'
import { useState } from 'react'

import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")

  return (
    <nav className='navbar'>
      <div className='max-width'>
      <div className='logo'>
        <a href="#">Portfolio</a>
      </div>
      <ul class="menu">
                <li><a href="#" onClick = {() => setActiveNav('#')} className={activeNav === '#' ? 'active menu-btn' : 'menu-btn'}>Home</a></li>
                <li><a href="#about" onClick = {() => setActiveNav('#about')} className={activeNav === '#about' ? 'active menu-btn' : 'menu-btn'}>About</a></li>
                <li><a href="#projects" onClick = {() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active menu-btn' : 'menu-btn'}>Projects</a></li>
                <li><a href="#skills" onClick = {() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active menu-btn' : 'menu-btn'}>Skills</a></li>
                <li><a href="#blogs" onClick = {() => setActiveNav('#blogs')} className={activeNav === '#blogs' ? 'active menu-btn' : 'menu-btn'}>Blogs</a></li>
                <li><a href="#achievements" onClick = {() => setActiveNav('#achievements')} className={activeNav === '#achievements' ? 'active menu-btn' : 'menu-btn'}>Achievements</a></li>
                <li><a href="#contact" onClick = {() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active menu-btn' : 'menu-btn'}>Contact</a></li>
            </ul>
      </div>
    </nav>
  )
}

export default Nav
