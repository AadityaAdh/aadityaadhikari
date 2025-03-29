import React from 'react'
import Navbar from '../Components/Navbar'
import './Projectspage.css'
import Allprojects from '../Components/Allprojects'

export default function Projectspage() {
  return (
    <div className='projectspage_outercontainer'>
        <div className='navbaroutercontainer'>
            <Navbar/>
        </div>
        <div className="allprojectsoutercontainer">
            <Allprojects/>

        </div>
      
    </div>
  )
}
