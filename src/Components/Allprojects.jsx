import React, { useState } from 'react'
import './Allprojects.css'
import { FaSearch } from "react-icons/fa";
import Viewmyprojectt from './Viewmyprojectt';

export default function Allprojects() {
    const [mytitle,setmytitle]=useState('');
    const [viewmyprojects,setviewmyprojects]=useState(false);
    const [searchdata,changesearchdata]=useState('');
    const projectsdata=[{
        title:"Prativa Chemicals Mern Stack",
        tools:["React","Node","Express","Mongo"],
        imagelink:"Prativachemicals.jpg",
        shortdescription:"A good website"
    },
    {
        title:"Airline Reservation System",
        tools:["React","Node","Express","Mongo"],
        imagelink:"PrativaChemicals.png",
        shortdescription:"A good website"
    },
    {
        title:"Automated Attendence using face recognition",
        tools:["Tensorflow","Python","Opencv","Mongo"],
        imagelink:"Prativachemicals.jpg",
        shortdescription:"A good website"
    },
    {
        title:"Prativa Chemicals Mern Stack",
        tools:["React","Node","Express","Mongo"],
        imagelink:"Prativachemicals.jpg",
        shortdescription:"A good website"
    },
    {
        title:"Prativa Chemicals Mern Stack",
        tools:["React","Node","Express","Mongo"],
        imagelink:"Prativachemicals.jpg",
        shortdescription:"A good website"
    }
]

function handleviewmyprojectcard(x){
    setmytitle(x);
    window.scrollTo(0,0);
    setviewmyprojects(true);
    
}
  return (
    !viewmyprojects?(
    <div className='allprojectscontainer'>
        <div className="allprojectsupcontainer">
            <h1>Projects</h1>
            <p>I love building projects and practice my engineering skills, here's an archive of things that I've worked on</p>
            <div className="allprojectssearchcontainer">
                <input type="text" placeholder='  Search Projects' value={searchdata} onChange={(e)=>changesearchdata(e.target.value)} />
                <p><FaSearch /></p>
            </div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>

        </div>
        
        <div className="allprojectsdowncontainer">
            {
                projectsdata.map((element,i)=>(
                    element.title.toLowerCase().includes(searchdata.toLowerCase())?(
                    <div className="allprojectsprojectcard" key={i} onClick={()=>handleviewmyprojectcard(element.title)}>
                        <img src={element.imagelink}></img>
                        <div className='allprojectsprojectcardtextsection'>
                        <h2>{element.title}</h2>
                        {element.tools.map((tool,index)=>(
                            <button key={index}>{tool}</button>
                        ))}
                        <p>{element.shortdescription}</p>
                        </div>
                    </div>):null
                ))
            }

        </div>
      
    </div>):<Viewmyprojectt title={mytitle}/>
  )
}
