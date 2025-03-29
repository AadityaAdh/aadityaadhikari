import React, { useState } from 'react'
import './Allprojects.css'
import { FaSearch } from "react-icons/fa";
import Viewmyprojectt from './Viewmyprojectt';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaReact, FaNodeJs, FaPython, FaPhp } from "react-icons/fa";
import { SiMongodb, SiTensorflow, SiMysql, SiOpencv, SiExpress } from "react-icons/si";


export default function Allprojects() {
    const [mytitle, setmytitle] = useState('');
    const [viewmyprojects, setviewmyprojects] = useState(false);
    const [searchdata, changesearchdata] = useState('');
    const projectsdata = [{
        title: "Prativa Chemicals Mern Stack",
        tools: ["React", "Node", "Express", "Mongo"],
        imagelink: "PrativaChemicals.png",
        shortdescription: "An e-commerce website for seamless shopping and management of detergent products."
    },
    {
        title: "Airline Reservation System",
        tools: ["PHP", "JS", "MySQL", "HTML"],
        imagelink: "Airlinereservation.png",
        shortdescription: "An efficient system for booking and managing airline reservations."
    },
    {
        title: "Face recognition System",
        tools: ["Tensorflow", "Python", "Opencv", "Mongo"],
        imagelink: "Facerecognition.jpg",
        shortdescription: "A Face Recognition System that accurately identifies individuals for secure authentication and attendance management"
    },
    {
        title: "Traffic sign recognition and generation",
        tools: ["Tensorflow", "Python", "OpenCV", "Mongo"],
        imagelink: "trafficsigngeneration.jpg",
        shortdescription: "A system for recognizing and generating traffic signs using GANs for accurate detection and realistic sign generation."
    },
    {
        title: "Prativa Chemicals Mern Stack",
        tools: ["React", "Node", "Express", "Mongo"],
        imagelink: "PrativaChemicals.png",
        shortdescription: "An e-commerce website for seamless shopping and management of detergent products."
    }
    ]
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

    function handleviewmyprojectcard(x) {
        setmytitle(x);
        window.scrollTo(0, 0);
        setviewmyprojects(true);


    }
    return (
        !viewmyprojects ? (
            <div className='allprojectscontainer'>
                <div className="allprojectsupcontainer">
                    <h2 className='allprojectsprojects'>Projects</h2>
                    <p className='allprojectsilove'>I love building projects and practice my engineering skills, here's an archive of things that I've worked on</p>
                    <br></br>
                    <div className="allprojectssearchcontainer">
                        <input type="text" placeholder='  Search Projects' value={searchdata} onChange={(e) => changesearchdata(e.target.value)} />
                        <p><FaSearch /></p>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>

                </div>
                <hr></hr>

                <div className="allprojectsdowncontainer">
                    {
                        projectsdata.map((element, i) => (
                            element.title.toLowerCase().includes(searchdata.toLowerCase()) ? (
                                <div className="allprojectsprojectcard" key={i} onClick={() => handleviewmyprojectcard(element.title)}>
                                    <img src={element.imagelink}></img>
                                    <br></br>
                                    <div className='allprojectsprojectcardtextsection'>
                                        <div className='allprojectsprojecttitle'>
                                            <p>{element.title}</p>

                                            <FaExternalLinkAlt />

                                        </div>
                                        <br></br>
                                        <div className='allprojectstools'>
                                        {element.tools.map((tool, index) => (
                                            <button key={index} className={`icon-${tool.toLowerCase()}`}>
                                            {iconMap[tool.toLowerCase()] || "🔧"} {tool}
                                        </button>
                                        ))}

                                        </div>
                                        <br></br>
                                        <hr></hr>
                                        <br></br>

                                        
                                        <p className='allprojectsdescription'>{element.shortdescription}<br></br><br></br></p>
                                    </div>
                                </div>) : null
                        ))
                    }

                </div>

            </div>) : <Viewmyprojectt title={mytitle} />
    )
}
