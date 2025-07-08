import React, { useEffect, useState } from 'react'
import './Projects.css'
import { Tilt } from 'react-tilt'


import { FaExternalLinkAlt } from "react-icons/fa";
import { FaReact, FaNodeJs, FaPython, FaPhp } from "react-icons/fa";
import { SiMongodb, SiTensorflow, SiMysql, SiOpencv, SiExpress } from "react-icons/si";

import { useNavigate } from 'react-router-dom';



export default function Projects() {

    const navigate=useNavigate();
    
    const [pd, setpd] = useState();
    const iconMap = {
            react: <FaReact />,
            node: <FaNodeJs />,
            express: <SiExpress />,
            mongo: <SiMongodb />,
            tensorflow: <SiTensorflow />,
            python: <FaPython />,
            opencv: <SiOpencv />,
            mysql: <SiMysql />,
            php: <FaPhp />,
        };

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
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('displayanimation');
            } 
        });
    });
    const allhereobserver = document.querySelectorAll('.hereobserver');
    allhereobserver.forEach((el) => observer.observe(el));

    

    
}, [pd]);




    useEffect(() => {
        async function getposts() {
            try {

                const response = await fetch(`https://aadityaadhbackend.onrender.com/posts`, {
                    method: "GET",

                });

                if (response.ok) {
                    const allitems = await response.json();
                    setpd(allitems.post);
                    //console.log(allitems.post[0].techstack.split(","))
                    console.log(allitems)

                }
                else {
                    console.log("unsucess")
                }

            }
            catch (error) {
                console.log(error)

            }



        }
        getposts()



    }, [])
    if (!pd) return (<img src='infinity.svg'></img>)

    function handleclick(id){
        navigate(`/viewmyproject/${id}`)
        
    }









    return (
        <div className='projectscontainer'>

            <div className="projectsleftitemscontainer">
                <p><span className='all_creatuve_works'>All Creative Works</span><br /><span className='projects_here_some'>Here's some of my projects that I have worked on</span>.<br /><span className='projects_explore_more'>Explore more →</span></p>
                <div onClick={()=>handleclick(pd[0]._id)} className='te'>
                    <Tilt options={defaultOptions} className='titlcard hereobserver' onClick={handleclick}>
                    <img src={`https://aadityaadhbackend.onrender.com/${pd[0].image}`}></img>
                    <div className="projectcontentssection">
                        <div className="projecttitleandnavbarcontainer">
                            <h1>{pd[0].title}</h1>
                            <FaExternalLinkAlt/>

                        </div>

                        <div className="projectbuttonsection">
                            {pd[0].techstack.split(",").map((tool, index) => (
                            <button key={index} className={`icon-${tool.toLowerCase().trim()}`}>
                                {iconMap[tool.toLowerCase().trim()] || "🔧"} {tool}
                            </button>
                        ))}

                        </div>
                        
                        
                        
                        
                        
                        <p>{pd[0].summary}</p>

                    </div>
                </Tilt>
                </div>

                <div onClick={()=>handleclick(pd[1]._id)} className='te'>
                    <Tilt options={defaultOptions} className='titlcard hereobserver' onClick={handleclick}>
                    <img src={`https://aadityaadhbackend.onrender.com/${pd[1].image}`}></img>
                    <div className="projectcontentssection">
                        <div className="projecttitleandnavbarcontainer">
                            <h1>{pd[1].title}</h1>
                            <FaExternalLinkAlt/>

                        </div>

                        <div className="projectbuttonsection">
                            {pd[1].techstack.split(",").map((tool, index) => (
                            <button key={index} className={`icon-${tool.toLowerCase().trim()}`}>
                                {iconMap[tool.toLowerCase().trim()] || "🔧"} {tool}
                            </button>
                        ))}

                        </div>
                        
                        
                        
                        
                        
                        <p>{pd[1].summary}</p>

                    </div>
                </Tilt>
                </div>
                





            </div>
            <div className="projectsrightitemscontainer">
                <div onClick={()=>handleclick(pd[2]._id)} className='te'>
                    <Tilt options={defaultOptions} className='titlcard hereobserver' onClick={handleclick}>
                    <img src={`https://aadityaadhbackend.onrender.com/${pd[2].image}`}></img>
                    <div className="projectcontentssection">
                        <div className="projecttitleandnavbarcontainer">
                            <h1>{pd[2].title}</h1>
                            <FaExternalLinkAlt/>

                        </div>

                        <div className="projectbuttonsection">
                            {pd[2].techstack.split(",").map((tool, index) => (
                            <button key={index} className={`icon-${tool.toLowerCase().trim()}`}>
                                {iconMap[tool.toLowerCase().trim()] || "🔧"} {tool}
                            </button>
                        ))}

                        </div>
                        
                        
                        
                        
                        
                        <p>{pd[2].summary}</p>

                    </div>
                </Tilt>
                </div>

                <div onClick={()=>handleclick(pd[3]._id)} className='te'>
                    <Tilt options={defaultOptions} className='titlcard hereobserver' onClick={handleclick}>
                    <img src={`https://aadityaadhbackend.onrender.com/${pd[3].image}`}></img>
                    <div className="projectcontentssection">
                        <div className="projecttitleandnavbarcontainer">
                            <h1>{pd[3].title}</h1>
                            <FaExternalLinkAlt/>

                        </div>

                        <div className="projectbuttonsection">
                            {pd[3].techstack.split(",").map((tool, index) => (
                            <button key={index} className={`icon-${tool.toLowerCase().trim()}`}>
                                {iconMap[tool.toLowerCase().trim()] || "🔧"} {tool}
                            </button>
                        ))}

                        </div>
                        
                        
                        
                        
                        
                        <p>{pd[3].summary}</p>

                    </div>
                </Tilt>
                </div>

            </div>

        </div>
    )
}
