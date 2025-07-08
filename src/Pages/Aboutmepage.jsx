import React from 'react'
import Navbar from '../Components/Navbar'
import Aboutme from '../Components/Aboutme'


export default function Aboutmepage() {
  return (
    <div className='projectspage_outercontainer'>
        <div className='navbaroutercontainer'>
            <Navbar/>
            
        </div>
        <div className="allprojectsoutercontainer">
          <Aboutme/>
            

        </div>
      
    </div>
  )
}
