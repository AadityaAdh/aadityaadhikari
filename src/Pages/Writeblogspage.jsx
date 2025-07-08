import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Writepost from '../Components/Writepost'
import './Writepostpage.css'
import { useNavigate } from 'react-router-dom';
import Writeblog from '../Components/Writeblog';

export default function Writeblogspage() {
  const navigate = useNavigate();
  
    

    useEffect(()=>{
            async function getprofile(){
            try{
            
            const response = await fetch(`http://localhost:4005/profile`, {
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
                  <Writeblog/>
                  
                          
                </div>
                
                
              
    </div>
  )
}
