import React from 'react'
import './Ending.css'
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

export default function Ending() {
  return (
    <div className='endingcontainer'>
        <h1 className='ending_keep'>Keep In Touch</h1>

        <p className='ending_specalize'>
        I'm currently Specalizing in <span className='article_data'>Data Engineering.</span><br></br>
        Feel free to get in touch and talk more about your project.
        </p>
        <br></br><br></br>
        <div className="endingbuttoncontainer">
        <a href='https://www.linkedin.com/in/aaditya-adhikari-b82ba028b/' target='_blank' className='linkedinbuttons'>&nbsp; &nbsp;<span className='ending_logos'><FaLinkedin /></span>&nbsp; LinkedIn&nbsp; &nbsp;</a>
        <a href='mailto:aaditya.adh@gmail.com' target='_blank'>&nbsp; &nbsp;<span className='ending_logos'><MdEmail /></span>&nbsp; Email&nbsp; &nbsp;</a>
        <a href='/AadityaAdh.pdf' target="_blank">&nbsp; &nbsp;<span className='ending_logos'><IoDocumentText /></span>&nbsp; Resume&nbsp; &nbsp;</a>

        </div>

        <br></br><br></br><br></br>

        




        <p className='ending_developed'>Developed by Aaditya Adhikari</p>
        <p className='ending_developed'>Built with <span className='ending_green'>React.js</span> & <span className='ending_green'>Express.js</span>.Hosted on <span className='ending_green'>Netlify</span> and <span className='ending_green'>Render</span></p>
      
    </div>
  )
}
