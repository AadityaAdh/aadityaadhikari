import React from 'react'
import './Hero.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <div className='herocontainer'>
        <div className="heroitemscontainer">
            <p className='heroheythere'>Hey There I'm </p>
            <h1 className='heromyname'>Aaditya Adhikari.</h1>
            <p className='herowho'><span className='herocomputerengineer'>Computer Engineer.</span>A self-taught developer with an<br/> interest in Computer Science</p>
            <p className='herospecalize'>🚀Currently Specalizing</p>
            <p className='herostatus'>⚡ Searching for job</p>
            <br/>
            <button href='#' className='herobuttons'><span className='heroicons'><FaGithub /></span>Github</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='herobuttons'><span className='heroicons'><FaLinkedin /></span>LinkedIn</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='herobuttons'><span className='heroicons'><MdEmail /></span>Email</button>

            
            
        </div>
      
    </div>
  )
}
