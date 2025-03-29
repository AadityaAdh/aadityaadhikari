import React, { useEffect } from 'react'
import './About.css'

export default function About() {

  useEffect(() => {
    let aboutcontainer = document.querySelector('.aboutcontainer');
    let windowheight1 = window.innerHeight;

    let mydistfromparent = aboutcontainer.offsetTop;
    let myheight = aboutcontainer.offsetHeight;
    window.onscroll = function () {
      let katiscrollvayo = window.scrollY + windowheight1;
      if (katiscrollvayo > mydistfromparent && katiscrollvayo < mydistfromparent + myheight) {
        aboutcontainer.classList.add('bottomtotopanimationclass')
      }

    }
  }, [])
  return (
    <div className='aboutcontainer'>
      <div className="aboutleftitemscontainer">
        <h2 className='about_aboutme'>⚡ About Me</h2>
        <p className='about_description'>
          Hi, I'm Aaditya Adhikari! My journey with computers started at a very young age, and it’s been
          a passion ever since. <br /><br />
          I've always been fascinated by creating solutions, which led me to explore the world of programming.
          Over time, I honed my skills and today, I’m proficient in various languages and technologies.
          I've had the privilege of working at <span title='Company'>GrowByData</span>.
          I'm passionate about building innovative projects and automating tasks with code. Currently,
          I’m focused on Data Engineering, Open Source contributions, and Competitive Programming. <br /><br />
          When I’m not coding, you’ll likely find me watching shows on Netflix, following different sports
          or if the weather’s good, playing cricket or football.
        </p>

      </div>
      <div className="aboutrightitemscontainer">
        <img src='Aaditya.jpg'></img>
      </div>

    </div>
  )
}
