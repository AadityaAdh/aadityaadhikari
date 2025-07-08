import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import './Viewmyprojectpage.css'
import { useNavigate } from 'react-router-dom';
import Viewmyblog from '../Components/Viewmyblog';


export default function Viewmyblogpage() {
  const navigate = useNavigate();
  
    

    
        
  return (
    <div className='adminviewmyprojectpage_outercontainer'>
                <div className='navbaroutercontainer'>
                    <Navbar/>
                </div>

                <div className="adminviewmyprojectpageoutercontainer">
                  
                  <Viewmyblog/>
                            
                
                </div>
                
                
                
              
    </div>
  )
}
