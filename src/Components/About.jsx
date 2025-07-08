import React, { useEffect } from 'react'
import './About.css'

export default function About() {

  
  useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  
                  entry.target.classList.add('displayanimation');
              } 
          });
      });
      const allhereobserver = document.querySelectorAll('.hereobserver');
      allhereobserver.forEach((el) => observer.observe(el));
  
      
  
      
  }, []);
  return (
    <div className='aboutcontainer hereobserver'>
      <div className="aboutleftitemscontainer">
        <h2 className='about_aboutme'>⚡ About Me</h2>
        <p className='about_description'>
          Hi, I'm Aaditya Adhikari! My journey with computers started at a very young age, and it has been
          a passion ever since. <br /><br />
          I've always been fascinated by creating solutions, which led me to explore the world of programming.
          Over time, I honed my skills, and today, I’m proficient in various languages and technologies.
          I've had the privilege of working at <span title='Company' className='about_green'>GrowByData</span>.
          I'm passionate about building innovative projects, optimizing workflows, and automating tasks with code.
          Right now, I’m focused on <span className='about_green'>Data Engineering,</span> Open Source contributions,
          and Competitive Programming. <br /><br />
          When I’m not coding, you’ll likely find me watching shows on Netflix, following different sports,
          or if the weather’s good, airplane spotting 🛫, playing cricket 🏏, or football ⚽️.
        </p>


      </div>
      <div className="aboutrightitemscontainer">
        <img src='Aaditya.jpg'></img>
      </div>

    </div>
  )
}
