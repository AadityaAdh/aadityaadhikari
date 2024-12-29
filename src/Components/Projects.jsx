import React from 'react'
import './Projects.css'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { FaJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { SiTensorflow } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { Tilt } from 'react-tilt'
import { IoIosArrowRoundForward } from "react-icons/io";


export default function Projects() {
    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
  return (
    <div className='projectscontainer'>
        <div className="projectsleftitemscontainer">
            <p><strong>All Creative Works</strong><br/>Here's some of my projects that I have worked on.<br/>Explore more<IoIosArrowRoundForward /></p>
            <div className='projectsproject1'>
                <Tilt options={defaultOptions} className='border'>
                <div className="projectsproject1container">
                <img src='PrativaChemicals.png'></img>
                <div className='projectsnameandlink'>
                <h2 className='projectsprojectname'>Prativa Chemicals Website(MERN)</h2>
                <p className='projectsexternallink'><FaExternalLinkAlt /></p>
                </div>
                <br/>
                <button className='projectsreact'><span><FaReact /></span>React</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='projectsnode'><span><IoLogoNodejs/></span>Node.js</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='projectsexpress'><span><FaJs/></span>Express</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='projectsmongo'><span><SiMongodb /></span>Mongo DB</button>
                <br/><br/>
                <hr/>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repudiandae exercitationem dignissimos iste esse rerum sunt fugiat mollitia eum distinctio nesciunt debitis itaque aperiam tempore accusantium, provident expedita unde modi!</p>


            </div>

                </Tilt>
            
            <div className="ropecontainer">
                <img src='rope.png'></img>
            </div>

            </div>
            <div className='projectsproject1'>
                <Tilt options={defaultOptions} className='border'>
            <div className="projectsproject1container">
                <img src='Airlinereservation.png'></img>
                <div className='projectsnameandlink'>
                <h2 className='projectsprojectname'>Airline Reservation System</h2>
                <p className='projectsexternallink'><FaExternalLinkAlt /></p>
                </div>
                <br/>
                <button className='projectsreact'><span><FaReact /></span>PHP</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='projectsnode'><span><IoLogoNodejs/></span>JS</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='projectsexpress'><span><FaJs/></span>MySQL</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='projectsmongo'><span><SiMongodb /></span>HTML</button>
                <br/><br/>
                <hr/>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repudiandae exercitationem dignissimos iste esse rerum sunt fugiat mollitia eum distinctio nesciunt debitis itaque aperiam tempore accusantium, provident expedita unde modi!</p>


            </div>
            </Tilt>
            <div className="ropecontainer">
                <img src='rope.png'></img>
            </div>

            </div>
            
            
            
            
        </div>
        <div className="projectsrightitemscontainer">
        <div className='projectsproject2'>
        <div className="ropecontainer2">
                <img src='rope.png'></img>
            </div>
            <Tilt options={defaultOptions} className='border'>
            <div className="projectsproject2container">
                <img src='Facerecognition.jpg'></img>
                <div className='projectsnameandlink'>
                <h2 className='projectsprojectname'>Automated Attendence using Facial Recognition</h2>
                <p className='projectsexternallink'><FaExternalLinkAlt /></p>
                </div>
                <br/>
                <button className='projectspython'><span><FaPython /></span>Python</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='projectstensorflow'><span><SiTensorflow/></span>Tensorflow</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='projectsopencv'><span><SiOpencv/></span>Open CV</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='projectsmongo'><span><SiMongodb /></span>Mongo DB</button>
                <br/><br/>
                <hr/>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repudiandae exercitationem dignissimos iste esse rerum sunt fugiat mollitia eum distinctio nesciunt debitis itaque aperiam tempore accusantium, provident expedita unde modi!</p>


            </div>
            </Tilt>
            

            </div>

            <div className='projectsproject2'>
        <div className="ropecontainer2">
                <img src='rope.png'></img>
            </div>
            <Tilt options={defaultOptions} className='border'>
            <div className="projectsproject2container">
                <img src='TrafficSign generation.webp'></img>
                <div className='projectsnameandlink'>
                <h2 className='projectsprojectname'>Traffic sign recognition and generation</h2>
                <p className='projectsexternallink'><FaExternalLinkAlt /></p>
                </div>
                <br/>
                <button className='projectspython'><span><FaPython /></span>Python</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='projectstensorflow'><span><SiTensorflow/></span>Tensorflow</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='projectsopencv'><span><SiOpencv/></span>Open CV</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='projectsmongo'><span><SiMongodb /></span>Mongo DB</button>
                <br/><br/>
                <hr/>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repudiandae exercitationem dignissimos iste esse rerum sunt fugiat mollitia eum distinctio nesciunt debitis itaque aperiam tempore accusantium, provident expedita unde modi!</p>


            </div>
            </Tilt>
            

            </div>

        </div>
      
    </div>
  )
}
