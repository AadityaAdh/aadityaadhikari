import React from 'react'
import './Contact.css'
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className='contactoutercontainer'>
      <p className='ccm'>Contact me</p>

      <a href='mailto:aaditya.adh@gmail.com' className='cc'><MdEmail color='#D44638' />aaditya.adh@gmail.com</a>
      <a href='https://www.facebook.com/aaditya.adhikari.52' className='cc'><FaFacebook color='#1877F2' />Facebook</a>
      <a href='https://www.linkedin.com/in/aaditya-adhikari-b82ba028b/' className='cc'><FaLinkedin color='#0A66C2' />LinkedIn</a>
    </div>
  )
}
