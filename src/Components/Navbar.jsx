import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
    const navigate = useNavigate();
    const [tokenverified,settokenverified]=useState(false);
    function handlemenubutton(actionstodo){
        let mobilecontainer=document.querySelector(".mobilemenucontainer");
        if (actionstodo=="show"){
            window.scrollTo(0,0)
            mobilecontainer.style.display="flex";
            

        }
        else if(actionstodo=="hide"){
            mobilecontainer.style.display="none";
        }
        
        
    }

    function handleoutsideclick(e){
        if(e.target.className=="mobilemenucontainer"){
        let mobilecontainer=document.querySelector(".mobilemenucontainer");
        mobilecontainer.style.display="none";
        }



    }

    function handlehome(){
        let mobilecontainer=document.querySelector(".mobilemenucontainer");
        mobilecontainer.style.display="none";
        
        navigate('/')
        
    }


    function handleprojects(){
        navigate('/projects')

    }
    function handleblog(){
        navigate('/blogs')

    }
    function handleabout(){
        navigate('/about')

    }

    function handleservices(){
        navigate('/services')

    }

    function handlecontact(){
        navigate('/contact')

    }

    function handlelogin(){
        navigate('/login')
    }
    useEffect(()=>{
        async function getprofile(){
        try{
        
        const response = await fetch(`https://aadityaadhbackend.onrender.com/profile`, {
                    method: "GET",
                    credentials: 'include'
                });

        if (response.ok){
            
            settokenverified(true)
        }
        else{
            settokenverified(false)
        }
    }
    catch(error){
        console.log(error)
    }
    
    
    
    }
        getprofile()
    },[])

    async function handlelogout() {
        const response = await fetch(`https://aadityaadhbackend.onrender.com/logout`, {
                    method: "GET",
                    credentials: 'include'
                });

        if (response.ok){
            settokenverified(false)
            console.log("Sucessfully logged out")
            navigate('/')
        }
        else{
            console.log("Could not logout response not okay check network tab")
        }
        
    }


  return (
    <div className='navbarcontainer'>
        <div className='navbarleftitemscontainer'>
            <p title='Aaditya Adhikari' onClick={handlehome}>👨‍✈️&nbsp; &nbsp;Aaditya</p>
        </div>
        <div className='navbarrightitemscontainer'>
            <button className='navbarbuttons' onClick={handlehome}>Home</button>
            <button className='navbarbuttons' onClick={handleprojects}>Projects</button>
            <button className='navbarbuttons' onClick={handleblog}>Blog</button>
            <button className='navbarbuttons' onClick={handleabout}>About</button>
            <button className='navbarbuttons' onClick={handleservices}>Services</button>
            <button className='navbarbuttons' onClick={handlecontact}>Contact</button>
            {!tokenverified &&(<button className='navbarbuttons' onClick={handlelogin}>Login</button>)}
            {tokenverified &&(<button className='navbarbuttons' onClick={handlelogout}>Logout</button>)}
            
            <p className='menuicon' onClick={()=>handlemenubutton("show")}><TiThMenu /></p>
        </div>

        <div className="mobilemenucontainer" onClick={handleoutsideclick}>
            <div className="mobilemenuitemscontainer">

            <div className="crossdiv"><p onClick={handlehome}><RxCross2 /></p></div>
            <button className="mobilenavbarbuttons" onClick={handlehome}>Home</button>
            <button className="mobilenavbarbuttons" onClick={handleprojects}>Projects</button>
            <button className="mobilenavbarbuttons" onClick={handleblog}>Blog</button>
            <button className="mobilenavbarbuttons" onClick={handleabout}>About</button>
            <button className="mobilenavbarbuttons" onClick={handleservices}>Servics</button>
            <button className="mobilenavbarbuttons" onClick={handlecontact}>Contact</button>
            {!tokenverified &&(<button className='mobilenavbarbuttons' onClick={handlelogin}>Login</button>)}
            {tokenverified &&(<button className='mobilenavbarbuttons' onClick={handlelogout}>Logout</button>)}

            </div>
            

        </div>
      
    </div>
  )
}
