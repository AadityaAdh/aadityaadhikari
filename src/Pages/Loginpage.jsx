import React from 'react'
import Navbar from '../Components/Navbar'
import './Loginpage.css'
import Login from '../Components/Login'

export default function Loginpage() {
  return (
    <div className='loginpage_outercontainer'>
            <div className='navbaroutercontainer'>
                <Navbar/>
            </div>
            <div className="loginsectionoutercontainer">
                <Login/>
            </div>
            
          
    </div>
  )
}
