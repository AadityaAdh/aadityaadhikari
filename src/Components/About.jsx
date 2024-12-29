import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className='aboutcontainer'>
      <div className="aboutleftitemscontainer">
        <h2>About Me</h2>
        <p>
        Hey! I'm Aaditya Adhikari, I've been close to a computer since an early age, and been passionate about it ever since.

I really liked to build stuff using no-code tools
back in 2010, and from that, I explored how to code myself, fast-forward to today, I do programming in various languages and technologies, and had the privilege to worked in a Recruitment Company
and a SaaS Company <span title='tooltiptext'>goodCompany</span>
I'm interested in building something awesome with code and automate tasks with code, currently focused on Web & Mobile Development,
Open Source
and Competitive Programming


When I'm not coding I play games with my friends, watch some show on Netflix, or if the weather's good, play basketball! 🏀

        </p>
      </div>
      <div className="aboutrightitemscontainer">
        <img src='Aaditya.jpg'></img>
      </div>
      
    </div>
  )
}
