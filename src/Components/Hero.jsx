import React from 'react'
import './Hero.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {

  const openLink = (url) => {
    window.location.href = url;
  };
  return (
    <div className='herocontainer'>
        <div className="heroitemscontainer">
            <p className='heroheythere'>Hey There I'm- </p>
            <h1 className='heromyname'>Aaditya Adhikari.</h1>
            <p className='herowho'><span className='herocomputerengineer'>Computer Engineer.</span>A self-taught developer with an<br/> interest in Computer Science</p>
            <br></br><br></br>
            <p className='herospecalize'>🚀 Currently Specalizing In Data Engineering</p>
            <p className='herostatus'>⚡ Intern at <span className='hero_green'>GrowByData</span></p>
            <br/><br></br>
            <div className='hero_buttons'>

            <button onClick={() => openLink("https://github.com/AadityaAdh")} className="herobuttons">
        <span className="heroicons"><FaGithub /></span>&nbsp; Github
      </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <button onClick={() => openLink("https://www.linkedin.com/in/aaditya-adhikari-b82ba028b/")} className="herobuttons">
        <span className="heroicons"><FaLinkedin /></span>&nbsp; LinkedIn
      </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <button onClick={() => openLink("mailto:aaditya.adh@gmail.com")} className="herobuttons">
        <span className="heroicons"><MdEmail /></span>&nbsp; Email
      </button>
            
            </div>

            
            
        </div>
      
    </div>
  )
}
