import React from 'react'
import './Navbar.css'
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
    const navigate = useNavigate();
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
            <p className='menuicon' onClick={()=>handlemenubutton("show")}><TiThMenu /></p>
        </div>

        <div className="mobilemenucontainer" onClick={handleoutsideclick}>
            <div className="mobilemenuitemscontainer">
            <p onClick={handlehome}><RxCross2 /></p>
            <button className="mobilenavbarbuttons" onClick={handlehome}>Home</button>
            <button className="mobilenavbarbuttons" onClick={handleprojects}>Projects</button>
            <button className="mobilenavbarbuttons" onClick={handleblog}>Blog</button>
            <button className="mobilenavbarbuttons" onClick={handleabout}>About</button>
            <button className="mobilenavbarbuttons" onClick={handleservices}>Servics</button>
            <button className="mobilenavbarbuttons" onClick={handlecontact}>Contact</button>

            </div>
            

        </div>
      
    </div>
  )
}
