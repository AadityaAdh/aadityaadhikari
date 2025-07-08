import React from 'react'
import Navbar from '../Components/Navbar'
import Contact from '../Components/Contact'

export default function Contactpage() {
  return (
    <div className='projectspage_outercontainer'>
            <div className='navbaroutercontainer'>
                <Navbar/>
            </div>
            

            <div className="allprojectsoutercontainer">
                        <Contact/>
            
                    </div>
          
        </div>
  )
}
