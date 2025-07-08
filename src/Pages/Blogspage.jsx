import React from 'react'
import Navbar from '../Components/Navbar'
import './Projectspage.css'
import Allprojects from '../Components/Allprojects'
import Allblogs from '../Components/Allblogs'

export default function Blogspage() {
  return (
    <div className='projectspage_outercontainer'>
        <div className='navbaroutercontainer'>
            <Navbar/>
        </div>
        <div className="allprojectsoutercontainer">
            <Allblogs/>

        </div>
      
    </div>
  )
}
