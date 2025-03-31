import React, { useEffect, useState } from 'react'
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
        reverse: false,  // reverse the tilt direction
        max: 35,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    useEffect(() => {
        let projectcontainer = document.querySelector('.projectscontainer');
        let windowheight = window.innerHeight;

        let mydistfromparent = projectcontainer.offsetTop;
        let myheight = projectcontainer.offsetHeight;
        window.onscroll = function () {
            let katiscrollvayo = window.scrollY + windowheight;
            if (katiscrollvayo > mydistfromparent && katiscrollvayo < mydistfromparent + myheight) {
                projectcontainer.classList.add('bottomtotopanimationclass1')
            }

        }
    }, [])

    


    


    return (
        <div className='projectscontainer'>

            <div className="projectsleftitemscontainer">
                <p><span className='all_creatuve_works'>All Creative Works</span><br /><span className='projects_here_some'>Here's some of my projects that I have worked on</span>.<br /><span className='projects_explore_more'>Explore more →</span></p>
                <div className='projectsproject1' >
                    <Tilt options={defaultOptions} className='border'>
                        <div className="projectsproject1container">
                            <img src='PrativaChemicals.png'></img>
                            <div className='project_descriptions'>
                                <div className='ninetyfivewidth'>
                                    <div className='projectsnameandlink'>
                                        <h2 className='projectsprojectname'>Prativa Chemicals Website(MERN)</h2>
                                        <p className='projectsexternallink'><FaExternalLinkAlt /></p>
                                    </div>
                                    <br />
                                    <div className='projects_buttons'>

                                        <button className='projectsreact'>&nbsp;&nbsp;&nbsp;&nbsp;<span><FaReact /></span> React&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                        <button className='projectsnode'>&nbsp;&nbsp;&nbsp;&nbsp;<span><IoLogoNodejs /></span> Node.js&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                        <button className='projectsexpress'>&nbsp;&nbsp;&nbsp;&nbsp;<span><FaJs /></span>Express&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                        <button className='projectsmongo'>&nbsp;&nbsp;&nbsp;&nbsp;<span><SiMongodb /></span> Mongo&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                    </div>
                                    <br/>

                                    <hr  />
                                    <br />
                                    <p className='projects_descriptionss'>
                                    An e-commerce website for seamless shopping and management of detergent products.
                                    </p>

                                        <br></br>

                                </div>

                            </div>




                        </div>

                    </Tilt>



                </div>
                <div className='projectsproject1' >
                    <Tilt options={defaultOptions} className='border'>
                        <div className="projectsproject1container" >
                            <img src='Airlinereservation.png'></img>
                            <div className='project_descriptions'>
                                <div className='ninetyfivewidth'>
                                    <div className='projectsnameandlink'>
                                        <h2 className='projectsprojectname'>Airline Reservation System</h2>
                                        <p className='projectsexternallink'><FaExternalLinkAlt /></p>
                                    </div>
                                    <br />
                                    <div className='projects_buttons'>
                                        <button className='projectsreact'>&nbsp;&nbsp;&nbsp;&nbsp;<span><FaReact /></span>PHP&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                        <button className='projectsnode'>&nbsp;&nbsp;&nbsp;&nbsp;<span><IoLogoNodejs /></span>JS&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                        <button className='projectsexpress'>&nbsp;&nbsp;&nbsp;&nbsp;<span><FaJs /></span>MySQL&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                        <button className='projectsmongo'>&nbsp;&nbsp;&nbsp;&nbsp;<span><SiMongodb /></span>HTML&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                    </div>
                                    <br/>

                                    <hr  />
                                    <br />
                                    <p className='projects_descriptionss'>
                                    An efficient system for booking and managing airline reservations.
                                    </p>
                                    <br></br>
                                </div>
                            </div>


                        </div>
                    </Tilt>

                


                </div>




            </div>
            <div className="projectsrightitemscontainer">
                <div className='projectsproject2' >

                    <Tilt options={defaultOptions} className='border'>
                        <div className="projectsproject2container">
                            <img src='Facerecognition.jpg'></img>
                            <div className='project_descriptions'>
                                <div className='ninetyfivewidth'>
                                    <div className='projectsnameandlink'>
                                        <h2 className='projectsprojectname'>Face Recognition System</h2>
                                        <p className='projectsexternallink'><FaExternalLinkAlt /></p>
                                    </div>
                                    <br />
                                    <div className='projects_buttons'>
                                        <button className='projectspython'>&nbsp;&nbsp;&nbsp;&nbsp;<span><FaPython /></span>Python&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                        <button className='projectstensorflow'>&nbsp;&nbsp;&nbsp;&nbsp;<span><SiTensorflow /></span>Tensorflow&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                        <button className='projectsopencv'>&nbsp;&nbsp;&nbsp;&nbsp;<span><SiOpencv /></span>Open CV&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                        <button className='projectsmongo'>&nbsp;&nbsp;&nbsp;&nbsp;<span><SiMongodb /></span>Mongo DB&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                    </div>
                                    <br/>

                                    <hr  />
                                    <br />
                                    <p className='projects_descriptionss'>
                                    A Face Recognition System that accurately identifies individuals
                                     for secure authentication and attendance management
                                    </p>

                                    <br></br>
                                </div>
                            </div>


                        </div>
                    </Tilt>


                </div>

                <div className='projectsproject2' >

                    <Tilt options={defaultOptions} className='border'>
                        <div className="projectsproject2container" >
                            <img src='trafficsigngeneration.jpg'></img>
                            <div className='project_descriptions'>
                                <div className='ninetyfivewidth'>
                                    <div className='projectsnameandlink'>
                                        <h2 className='projectsprojectname'>Traffic sign recognition and generation</h2>
                                        <p className='projectsexternallink'><FaExternalLinkAlt /></p>
                                    </div>
                                    <br />
                                    <div className='projects_buttons'>
                                        <button className='projectspython'><span>&nbsp;&nbsp;&nbsp;&nbsp;<FaPython /></span>Python&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                        <button className='projectstensorflow'>&nbsp;&nbsp;&nbsp;&nbsp;<span><SiTensorflow /></span>Tensorflow&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                        <button className='projectsopencv'>&nbsp;&nbsp;&nbsp;&nbsp;<span><SiOpencv /></span>Open CV&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                        <button className='projectsmongo'>&nbsp;&nbsp;&nbsp;&nbsp;<span><SiMongodb /></span>Mongo DB&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                    </div>
                                    <br/>


                                    <hr  />
                                    <br />
                                    <p className='projects_descriptionss'>
                                    A system for recognizing and generating traffic signs using GANs for
                                     accurate detection and realistic sign generation.
                                    </p>
                                    <br></br>
                                </div>
                            </div>


                        </div>
                    </Tilt>


                </div>

            </div>

        </div>
    )
}
