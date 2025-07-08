import React, { useEffect, useState } from 'react'
import './Adminviewmyproject.css'
import { useNavigate, useParams } from 'react-router-dom'

export default function Adminviewmyproject() {
    const navigate = useNavigate();    
    const {id} = useParams();
    const [postinfo,setpostinfo]=useState(null);
    const projectdata = {
        id:"djak",
        title: "Prativa Chemicals Mern stack",
        summary: "this is summary",
        image_loc: "/PrativaChemicals.png",
        content: "<h1>Prativa chemicals</h1>",
        link:"https://prativachemicals.netlify.app"
    }

    useEffect(()=>{
        // code to find the data from the given id  
        //say that project data came up

        setpostinfo(projectdata)

    },[])


    if (!postinfo) return <h1>Error loading</h1>

    function handlesingkeprojectclick(){
        window.open(postinfo.link, '_blank');

    }

    function handleupdatepost(id){
        navigate(`/adminupdatepost/${id}`)
    }
  return (
    <div className='adminviewmyprojectoutercontainer'>
        <img src={postinfo.image_loc} />
        <h1 onClick={handlesingkeprojectclick} className='projectadmintitle'>{postinfo.title} 🔗</h1>

        <p onClick={handlesingkeprojectclick} className='projectadminlink'>Link</p>

        <button onClick={()=>handleupdatepost(id)}>Update post</button>

        <h2>{postinfo.summary}</h2>

        <div dangerouslySetInnerHTML={{ __html: postinfo.content }}></div>

        
      
    </div>
  )
}
