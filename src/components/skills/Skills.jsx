import React from 'react'
import {ProgressBar} from 'react-bootstrap/ProgressBar'
import './skills.css'

const Skills = () => {
  return (
    <section id = "skills">
       <h2>My Skills</h2>
       <h5>What I Know</h5>
       <h4>Technologies</h4>
       <div className='skills-container'>
           <div className='skills-card tech'>
              <div className='te'>
                VSCode
              </div>
              <div className='te'>
                VSCode
              </div>
              <div className='te'>
                VSCode
              </div>
              <div className='te'>
                VSCode
              </div>
              <div className='te'>
                VSCode
              </div>
              <div className='te'>
                VSCode
              </div>
              <div className='te'>
                VSCode
              </div>
              <div className='te'>
                VSCode
              </div>
              <div className='te'>
                VSCode
              </div>

           </div>
           <div className='skills-card'>
           <ul>
                <li>VSCode</li>
                {/* <ProgressBar now = {60}/> */}
                <li>VSCode</li>
                <li>VSCode</li>
                <li>VSCode</li>
                <li>VSCode</li>
                <li>VSCode</li>
                <li>VSCode</li>
              </ul>
           </div>
       </div>
    </section>
  )
}

export default Skills
