import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Updatepost from '../Components/Updatepost'
import './Writepostpage.css'
import { useNavigate } from 'react-router-dom';
import Updateblog from '../Components/Updateblog';

export default function Adminupdateblogpage() {
  const navigate = useNavigate();
  
    

    useEffect(()=>{
            async function getprofile(){
            try{
            
            const response = await fetch(`https://aadityaadhbackend.onrender.com/profile`, {
                        method: "GET",
                        credentials: 'include'
                    });
    
            if (!response.ok){
                alert("Don't try to trick us")
                navigate('/')
            }
            
        }
        catch(error){
            console.log(error)
            navigate('/')
        }
        
        
        
        }
            getprofile()
        },[])
        
  return (
    <div className='writepostpage_outercontainer'>
                    <div className='navbaroutercontainer'>
                        <Navbar/>
                    </div>
                    <div className="writepostpagesectionoutercontainer">
                      <Updateblog/>
                              
                    </div>
                    
                    
                  
    </div>
  )
}
