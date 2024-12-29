import React from 'react'
import './Homepage.css'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Article from '../Components/Article'
import Ending from '../Components/Ending'

export default function Homepage() {
  return (
    <div className='homepagecontainer'>
        <div className='navbaroutercontainer'>
            <Navbar/>
        </div>
        <div className="herooutercontainer">
          <Hero/>
        </div>
        <div className="aboutoutercontainer">
          <About/>
        </div>

        <div className="projectsoutercontainer">
          <Projects/>
        </div>
        <div className="articleoutercontainer">
          <Article/>
        </div>
        <div className="endingoutercontainer">
          <Ending/>
        </div>

      
    </div>
  )
}
