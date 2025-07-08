import React, { useEffect } from 'react'
import './Ending.css'
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

export default function Ending() {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('displayanimation');
            } 
        });
    });
    const allhereobserver = document.querySelectorAll('.hereobserver');
    allhereobserver.forEach((el) => observer.observe(el));

    

    
}, []);
  return (
    <div className='endingcontainer'>
        <h1 className='ending_keep hereobserver'>Keep In Touch</h1>

        <p className='ending_specalize hereobserver'>
        I'm currently Specalizing in <span className='article_data'>Data Engineering.</span><br></br>
        Feel free to get in touch and talk more about your project.
        </p>
        <br></br><br></br>
        <div className="endingbuttoncontainer">
        <a href='https://www.linkedin.com/in/aaditya-adhikari-b82ba028b/' target='_blank' className='linkedinbuttons hereobserver'>&nbsp; &nbsp;<span className='ending_logos'><FaLinkedin /></span>&nbsp; LinkedIn&nbsp; &nbsp;</a>
        <a href='mailto:aaditya.adh@gmail.com' target='_blank' className='hereobserver'>&nbsp; &nbsp;<span className='ending_logos'><MdEmail /></span>&nbsp; Email&nbsp; &nbsp;</a>
        <a href='/AadityaAdhikari.pdf' target="_blank" className='hereobserver'>&nbsp; &nbsp;<span className='ending_logos'><IoDocumentText /></span>&nbsp; Resume&nbsp; &nbsp;</a>

        </div>

        <br></br><br></br><br></br>

        




        <p className='ending_developed hereobserver'>Developed by Aaditya Adhikari<br></br>Built with <span className='ending_green'>React.js</span> & <span className='ending_green'>Express.js</span>.Hosted on <span className='ending_green'>Netlify</span> and <span className='ending_green'>Render</span></p>
        
      
    </div>
  )
}
