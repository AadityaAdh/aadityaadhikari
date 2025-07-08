import React from 'react'
import Navbar from '../Components/Navbar'
import Services from '../Components/Services'

export default function Servicespage() {
  return (
    <div className='projectspage_outercontainer'>
            <div className='navbaroutercontainer'>
                <Navbar/>
            </div>
            

            <div className="allprojectsoutercontainer">
                        <Services/>
            
                    </div>
          
        </div>
  )
}
