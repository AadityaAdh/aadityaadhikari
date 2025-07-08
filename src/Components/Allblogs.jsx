import React, { useEffect, useState } from 'react'
import './Allprojects.css'
import './Allblogs.css'
import { FaSearch } from "react-icons/fa";
import Viewmyprojectt from './Viewmyprojectt';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaReact, FaNodeJs, FaPython, FaPhp } from "react-icons/fa";
import { SiMongodb, SiTensorflow, SiMysql, SiOpencv, SiExpress } from "react-icons/si";
import { useNavigate, useParams } from 'react-router-dom'



export default function Allblogs() {
    const [mytitle, setmytitle] = useState('');
    const [viewmyprojects, setviewmyprojects] = useState(false);
    const [searchdata, changesearchdata] = useState('');
    const [isadmin,setisaddmin]=useState(false);
    const [pd,setpd]=useState([]);
    const navigate = useNavigate();    
    
    
    
    useEffect(()=>{
                async function getprofile(){
                try{
                
                const response = await fetch(`http://localhost:4005/profile`, {
                            method: "GET",
                            credentials: 'include'
                        });
        
                if (response.ok){
                    setisaddmin(true)
                }
                
            }
            catch(error){
                console.log(error)
                
            }
            
            
            
            }
                getprofile()
            },[])

    useEffect(()=>{
        async function getposts(){
            console.log("hit here")
                try{
                
                const response = await fetch(`http://localhost:4005/blogs`, {
                            method: "GET",
                            
                        });
        
                if (response.ok){
                    const allitems = await response.json();
                    
                    
                    setpd(allitems.blog);
                    //console.log(allitems.post[0].techstack.split(","))
                    
                }
                
                else{
                    console.log("unsucess")
                }
                
            }
            catch(error){
                console.log(error)
                
            }
            
            
            
            }
                getposts()

    },[])
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
    };

    function handleviewmyblog(id) {
        navigate(`/viewmyblog/${id}`)


    }
    function handlewritepost(){
        navigate('/writeblog')

    }
    return (
        !viewmyprojects ? (
            <div className='allprojectscontainer'>
                
                <div className="allprojectsupcontainer">
                    {isadmin && (<button className='allprojectswritepost' onClick={handlewritepost}>Write Blogs</button>)}

                    <h2 className='allprojectsprojects'>Blogs</h2>
                    <br></br>
                    <p className='allprojectsilove'>This is where I share my writings on programming, tutorials, and my experiences.</p>
                    <br></br>
                    <div className="allprojectssearchcontainer">
                        <input type="text" placeholder='  Search Blogs' value={searchdata} onChange={(e) => changesearchdata(e.target.value)} />
                        <p><FaSearch /></p>
                    </div>
                    <p>&nbsp;</p>
                    

                </div>
                <div className='blogshr'></div>

                <div className="allmyblogsdowncontainer">
                    <div className='bloggap'></div>
                    {
                        pd.map((element, i) => (
                            element.title.toLowerCase().includes(searchdata.toLowerCase()) ? (
                                <div className='singleblogcontainer' onClick={()=>handleviewmyblog(element._id)}>
                                    <div className="datetimecontainer">
                                        <p>{element.date}</p>
                                        <p>{element.minread} read</p>
                                    </div>
                                    <div className="blogcontentscontainer">
                                        <p className='blogstitle'>{element.title}</p>
                                        <p className='blogssummary'>{element.summary}</p>
                                        <p className='blogslm'>Learn more →</p>
                                    </div>
                                </div>
                                ) : null
                        ))
                    }

                </div>

            </div>) : <Viewmyprojectt title={mytitle} />
    )
}
