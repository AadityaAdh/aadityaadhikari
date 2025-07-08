import React, { useEffect, useState } from 'react'
import './Article.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


export default function Article() {
  

  const [data,setdata]=useState();
  const navigate = useNavigate();

  useEffect(()=>{
        async function getposts(){
            console.log("hit here")
                try{
                
                const response = await fetch(`https://aadityaadhbackend.onrender.com/blogs`, {
                            method: "GET",
                            
                        });
        
                if (response.ok){
                    const allitems = await response.json();
                    
                    
                    setdata(allitems.blog);
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

    


    function handleallarticles(){
      navigate('/blogs')
      
    }

    function handleviewarticle(id){
      navigate(`/viewmyblog/${id}`)
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
    
        
    
        
    }, [data]);

    if (!data) return (<img src='infinity.svg'></img>)

  
  return (
    <div className='articlecontainer'>
      <div className="articletopcontainer">
        <h2 className='article_latest hereobserver'>📰 Latest Article</h2>
        <p className='article_view hereobserver' onClick={handleallarticles}>View all articles →</p>
        
      </div>
      <div className="articlebottomcontainer">
      {data.map((element,i) => 
        i<=3?
        (
          <div className='articleitemscontainer hereobserver' key={i} onClick={()=>handleviewarticle(element._id)}>
            <p className='article_element_title'>{element.title}</p>
            <p className='article_time'>{element.date}&nbsp;.&nbsp;{element.minread} read</p>
          </div>
          
        ):null
        
      )}

      </div>
      
      

      
    </div>
  )
}

