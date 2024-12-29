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
        <button className='linkedinbuttons'><FaLinkedin />LinkedIn</button>
        <button><MdEmail />Email</button>
        <button><IoDocumentText />Resume</button>

        </div>

        




        <p>Developed by Aaditya Adhikari</p>
        <p>Built with React.js & Express.Hosted on Netlify and Render </p>
      
    </div>
  )
}
