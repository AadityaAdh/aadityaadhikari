import React from 'react'
import './Ending.css'
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

export default function Ending() {
  return (
    <div className='endingcontainer'>
        <h1>Keep In Touch</h1>

        <p>
        I'm currently looking for a job.
        Feel free to get in touch and talk more about your project or job offerings.
        </p>
        <div className="endingbuttoncontainer">
        <a href='https://www.linkedin.com/in/aaditya-adhikari-b82ba028b/' target='_blank' className='linkedinbuttons'><FaLinkedin />LinkedIn</a>
        <a href='mailto:aaditya.adh@gmail.com' target='_blank'><MdEmail />aEmail</a>
        <a href='/AadityaAdh.pdf' target="_blank"><IoDocumentText />Resume</a>

        </div>

        




        <p>Developed by Aaditya Adhikari</p>
        <p>Built with React.js & Express.Hosted on Netlify and Render </p>
      
    </div>
  )
}
