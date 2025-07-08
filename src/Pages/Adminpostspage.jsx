import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Adminallprojects from '../Components/Adminallprojects'
import './Adminpostspage.css'
import { useNavigate } from 'react-router-dom';

export default function Adminposts() {
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
        <div className='adminpostspage_outercontainer'>
            <div className='navbaroutercontainer'>
                <Navbar />
            </div>

            <div className='adminpostssectionoutercontainer'>
                <Adminallprojects/>
            </div>

            



        </div>
    )
}
