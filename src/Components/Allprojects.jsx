import React, { useEffect, useState } from 'react'
import './Allprojects.css'
import { FaSearch } from "react-icons/fa";
import Viewmyprojectt from './Viewmyprojectt';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaReact, FaNodeJs, FaPython, FaPhp } from "react-icons/fa";
import { SiMongodb, SiTensorflow, SiMysql, SiOpencv, SiExpress } from "react-icons/si";
import { SiApacheairflow } from "react-icons/si";
import { SiApachespark } from "react-icons/si";
import { IoLogoDocker } from "react-icons/io5";
import { SiSelenium } from "react-icons/si";
import { useNavigate, useParams } from 'react-router-dom'



export default function Allprojects() {
    const [mytitle, setmytitle] = useState('');
    const [viewmyprojects, setviewmyprojects] = useState(false);
    const [searchdata, changesearchdata] = useState('');
    const [isadmin, setisaddmin] = useState(false);
    const [pd, setpd] = useState([]);
    const navigate = useNavigate();

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
        async function getprofile() {
            try {

                const response = await fetch(`https://aadityaadhbackend.onrender.com/profile`, {
                    method: "GET",
                    credentials: 'include'
                });

                if (response.ok) {
                    setisaddmin(true)
                }

            }
            catch (error) {
                console.log(error)

            }



        }
        getprofile()
    }, [])

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
        airflow: <SiApacheairflow />,
        spark: <SiApachespark />,
        docker: <IoLogoDocker />,
        selenium: <SiSelenium />
    };

    function handleviewmyprojectcard(id) {
        navigate(`/viewmyproject/${id}`)


    }
    function handlewritepost() {
        navigate('/writepost')

    }
    return (
        !viewmyprojects ? (
            <div className='allprojectscontainer'>

                <div className="allprojectsupcontainer">
                    {isadmin && (<button className='allprojectswritepost' onClick={handlewritepost}>Write Posts</button>)}

                    <h2 className='allprojectsprojects'>Projects</h2>
                    <br></br>
                    <p className='allprojectsilove'>I love building projects and practice my engineering skills, here's an archive of things that I've worked on</p>
                    <br></br>
                    <div className="allprojectssearchcontainer">
                        <input type="text" placeholder='  Search Projects' value={searchdata} onChange={(e) => changesearchdata(e.target.value)} />
                        <p><FaSearch /></p>
                    </div>
                    <p>&nbsp;</p>


                </div>

                <div className='projectshr'></div>
                <br></br>


                <div className="allprojectsdowncontainer">

                    {
                        pd.map((element, i) => (
                            element.title.toLowerCase().includes(searchdata.toLowerCase()) ? (
                                <div className="allprojectsprojectcard hereobserver" key={i} onClick={() => handleviewmyprojectcard(element._id)}>
                                    <img src={`https://aadityaadhbackend.onrender.com/${element.image}`}></img>
                                    <br></br>
                                    <div className='allprojectsprojectcardtextsection'>
                                        <div className='allprojectsprojecttitle'>
                                            <p>{element.title}</p>

                                            <FaExternalLinkAlt />

                                        </div>
                                        <br></br>
                                        <div className='allprojectstools'>
                                            {element.techstack.split(",").map((tool, index) => (
                                                <button key={index} className={`icon-${tool.toLowerCase().trim()}`}>
                                                    {iconMap[tool.toLowerCase().trim()] || "🔧"} {tool}
                                                </button>
                                            ))}

                                        </div>
                                        <br></br>
                                        <div className='projectssechr'></div>
                                        <br></br>


                                        <p className='allprojectsdescription'>{element.summary}<br></br><br></br></p>
                                    </div>
                                </div>) : null
                        ))
                    }

                </div>

            </div>) : <Viewmyprojectt title={mytitle} />
    )
}
