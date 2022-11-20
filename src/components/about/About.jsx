import './about.css'
import ME from '../../assets/me.jpg'

const About = () => {
  return (
    <section id = "about">
      <div className='about'>
      <h2>About Me</h2>
      <h5>Who I am</h5>

      <div className="container about__container">
        <div className='space'></div>
        <div className="about__me">
           <img src={ME} alt="" />
        </div>
        <div className="about__content">
          I am Shalini C E and I'm an enthusiastic problem solver, a passionate learner
          and a believer who work with dedication and determination to achieve what I dream.
          <br />
          I was born in Hassan, Karnataka. I am currently studying
          B. Tech in Information Technology at NITK, Surathkal.
          I completed my schooling from Jawahar Navodaya Vidyalaya, Hassan.
          I love learning and exploring new technology and to put them in use 
          in real life applications. I am constant learner. 
          I am an optmistic person who wishes to see the positive
          sides of a situation to make the best use of it.
          <br />
          <a href="" className='btn'>Hire me</a>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About
