import './contact.css'

import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Connect with Me</h1>

      <form action="">
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Subject/Purpose'/>
        <input type="text" placeholder='Message'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact
